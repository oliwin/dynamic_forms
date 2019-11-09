import { FormInputDateComponent } from "./inputdate/form-inputdate.component";
import { FormRadioComponent } from "./radio/form-radio.component";
import { FormTextareaComponent } from "./textarea/form-textarea.component";
import { FormInputComponent } from "./input/form-input.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule, NgForm } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FormSelectComponent } from "./select/form-select.component";
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";

@NgModule({
  declarations: [
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormRadioComponent,
    FormInputDateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],

  providers: [NgForm],

  exports: [
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormRadioComponent,
    FormInputDateComponent
  ]
})
export class CustomFormModule {}
