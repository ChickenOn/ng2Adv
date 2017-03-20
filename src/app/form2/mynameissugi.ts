import { AbstractControl } from '@angular/forms';
export function sugiValidator(ctrl: AbstractControl) {
    if (((ctrl.value) as string).indexOf('sugi') !=-1)
        return null;
    return { 'namenosugiyoubadbad': false };
}