import { Form } from '../../FormService';
import { Notificator } from "../../../Notificator";
import { Component, Input, OnInit } from "@angular/core";
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
  selector: "app-form-inputdate",
  templateUrl: "./form-inputdate.component.html",
  styleUrls: ["./form-inputdate.component.css"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class FormInputDateComponent implements OnInit {
  @Input() form: Form;
  @Input() field: any;

  constructor() {}

  ngOnInit() {}

  emitChange(form: any, field: any) {
    Notificator.emitChange(form, field);
  }

  get value() {
    return this.field.value || "";
  }

  get placeholder() {
    return this.field.placeholder || "";
  }
}
