import { BlockModule } from "./block.module";
import { CustomFormModule } from "./form/form.module";
import { FormService } from "./FormService";
import { FieldComponent } from "./field.component";
import { BlockComponent } from "./block.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent, BlockComponent, FieldComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomFormModule,
    BrowserAnimationsModule,
    MatButtonModule,
    BlockModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule {}
