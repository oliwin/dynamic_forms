import { FormService, Form } from "./FormService";
import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-block",
  templateUrl: "./block.component.html",
  styleUrls: ["./block.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class BlockComponent implements OnInit {
  constructor(public formService: FormService) {}

  @Input() form: Form;
  ngOnInit() {}

  isSubmit(form: any) {
    return form.form.isSubmit;
  }
}
