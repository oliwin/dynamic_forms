import { Form } from './FormService';
import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-field",
  templateUrl: "./field.component.html",
  encapsulation: ViewEncapsulation.None
})
export class FieldComponent {
  @Input() form: Form;
  @Input() field: any;

  constructor() {}
}
