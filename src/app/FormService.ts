import { Notificator } from "./../Notificator";
import {
  RootObject,
  IForm,
  Field,
  _JSON,
  RefsField,
  IReferenceForm
} from "./Model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Helper } from "./Helper";
import { Observable } from "rxjs";
import { of } from "rxjs";

abstract class FormAbstarct {
  name: string;
  label: string;
  formGroup: FormGroup;

  abstract submit();

  constructor(form: IForm) {
    this.name = form.name;
    this.label = form.label;
    this.formGroup = new FormGroup(this.controls(form.fields));
  }

  controls(fields: Field[]) {
    return fields.reduce((formObject, field) => {
      formObject[field.name] = new FormControl(
        {
          value: field.value,
          disabled: field.disabled
        },
        this.applyValidator(field)
      );
      return formObject;
    }, {});
  }

  applyValidator(field: Field): any[] {
    let validationRules = [];

    if (field.required) {
      validationRules.push(Validators.required);
    }

    if (field.validator) {
      /* String or array, check */

      if (field.validator === "number") {
        validationRules.push(Validators.pattern(/^[0-9]+$/));
      }

      if (field.validator === "string") {
        validationRules.push(Validators.pattern(/^[A-Za-z]+$/));
      }
    }

    return validationRules;
  }
}

export class Form extends FormAbstarct {
  constructor(public form: IForm) {
    super(form);
  }

  submit() {
    console.log(this.formGroup.value());
  }
}

/************************* Main service ******************************/

@Injectable()
export class FormService {
  readonly sortBy = "order";

  private forms: Form[] = [];
  private response: RootObject;
  private _title: string;

  get(): Observable<string> {
    return of(JSON.stringify(_JSON));
  }

  /* The main handeler JSON */

  constructor(public http: HttpClient) {
    this.get().subscribe(response => {
      try {
        this.prepareResponse(response);
        this.setFormTitle(this.response.title);
        this.iterateJSONForms(this.response);
        this.iteratePublishers(this.response.refsField);
      } catch (err) {
        console.error("ERROR:" + err);
      }
    });
  }

  iteratePublishers(refsField: RefsField[]) {
    refsField.forEach(ref => {
      let [sourceName, sourceField] = ref.source.split(".");
      let [referenceName, referenceField] = ref.depends.split(".");

      let source = this.getFrom(sourceName);
      let reference = this.getFrom(referenceName);
      let rules = ref.rules;

      if (!reference || !source) return;

      const data = {
        source,
        reference,
        sourceField,
        referenceField,
        rules
      } as IReferenceForm;

      Notificator.registerChange(data);
    });
  }

  getFrom(formName: string) {
    return this.forms.find(form => form.name === formName);
  }

  prepareResponse(response: any) {
    this.response = Helper.validateJSON<RootObject>(response);
  }

  iterateJSONForms(response: any) {
    this.forms = Helper.sort(response.forms, this.sortBy, true).map(
      form => new Form(form)
    );
  }

  setFormTitle(value: string) {
    this._title = value;
  }

  submit = (plain = false) => {
    let obj = {};

    this.forms.forEach(form => {
      if (plain) {
        obj = { ...obj, ...form.formGroup.value };
      } else {
        obj[form.name] = form.formGroup.value;
      }
    });

    console.log(obj);
  };

  get title() {
    return this._title;
  }

  isValid(): boolean {
    return this.forms.filter(form => form.formGroup.invalid).length == 0;
  }

  getFields(form: any) {
    return Helper.sort(form.fields, this.sortBy, true);
  }

  roots = () => this.forms.filter(form => !form.form.parent);

  childrens = (formName: string) =>
    this.forms.filter(form => form.form.parent === formName);

  hasChild = (formName: string) => this.childrens(formName).length;
}
