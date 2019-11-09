import { Notificator } from "./../../../Notificator";
import { Form } from "./../../FormService";
import { Component, Input, OnInit } from "@angular/core";
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
  selector: "app-form-radio",
  templateUrl: "./form-radio.component.html",
  styleUrls: ["./form-radio.component.css"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class FormRadioComponent implements OnInit {
  @Input() form: Form;
  @Input() field: any;

  constructor() {}

  ngOnInit() {}

  get placeholder() {
    return this.field.placeholder || "";
  }

  emitChange(form: any, field: any) {
    Notificator.emitChange(form, field);
  }
}
