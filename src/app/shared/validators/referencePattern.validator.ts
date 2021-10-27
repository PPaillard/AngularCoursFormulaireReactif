import { AbstractControl, ValidationErrors } from "@angular/forms";

export function referencePatternValidator(control: AbstractControl):ValidationErrors | null {

  const referencePattern = RegExp('([0-9]{1}#[0-9A-Z]+)')
  const valid = referencePattern.test(control.value)

  return valid? null : {
    pattern : "Doit contenir un format de type 8#478FG9856"
  }
}
