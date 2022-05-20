import { Directive, ElementRef, HostListener } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';

/** check email with  match the given regular expression */
export function emailValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const invalid = nameRe.test(control.value);
    return !invalid ? {email: {value: control.value}} : null;
  };
}


@Directive({
  selector: '[emailValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective , multi: true}]
})
export class EmailValidatorDirective {
  validEmailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

  constructor(private el: ElementRef) { }

  validate(control: AbstractControl):ValidationErrors | null {
    return  emailValidator(this.validEmailRegex)(control);
  }



  // @HostListener('keypress') onKeyPress(){
  //   if(this.el.nativeElement.value.length!=0){
  //     this.el.nativeElement.style.backgroundColor='green';
  //     console.log(this.el.nativeElement.value.length)
  //   }
  //   else
  //   this.el.nativeElement.style.backgroundColor='red';

  // }
}
