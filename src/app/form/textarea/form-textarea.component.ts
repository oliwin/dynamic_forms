import { Notificator } from './../../../Notificator';
import { Form } from './../../FormService';
import { Component, Input, OnInit } from "@angular/core";
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
  selector: "app-form-textarea",
  templateUrl: "./form-textarea.component.html",
  styleUrls: ["./form-textarea.component.css"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class FormTextareaComponent implements OnInit {
  @Input() form: Form;
  @Input() field: any;

  constructor() {}

  ngOnInit() {}

  get value() {
    return this.field.value || "Default value";
  }

  get placeholder() {
    return this.field.placeholder || "Default placeholder";
  }

  emitChange(form: any, field: any) {
    Notificator.emitChange(form, field);
  }
}
