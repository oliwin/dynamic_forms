import { FormControl } from "@angular/forms";
import { EFieldActions, IReferenceForm } from "./app/Model";

export class Notificator {
  private static observables = {};

  static registerChange(data: IReferenceForm) {
    Notificator.observables[data.source.name] = data;
  }

  static unregisterChange(formName: string) {
    delete Notificator.observables[formName];
  }

  static emitChange(form: any, changedField: any) {
    let publisher = Notificator.observables[form.name];
    if (!publisher) return;

    if (publisher.sourceField === changedField.name) {
      publisher.rules.forEach(action => {
        FormActions.action(
          publisher.reference.formGroup.controls[publisher.referenceField],
          action
        );
      });
    }
  }
}

class FormActions {

  /* Extend actions if need */

  static action(reference: FormControl, action: EFieldActions) {
    switch (action) {
      case EFieldActions.DISABLE:
        reference.disable();
        break;

      case EFieldActions.ENABLE:
        reference.enable();
        break;

      case EFieldActions.INVALIDATE:
        reference.setErrors(null);
        break;

      case EFieldActions.RESET:
        reference.reset();
        break;

      case EFieldActions.READONLY:
        break;

      default:
        console.warn("No action found!");
        break;
    }
  }
}
