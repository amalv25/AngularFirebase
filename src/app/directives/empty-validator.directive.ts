import { Directive, ElementRef, HostListener } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[emptyValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmptyValidatorDirective,
    multi: true
  }]
})
export class EmptyValidatorDirective implements Validator{

  constructor(private el: ElementRef) { }
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value && control.value.length == 0) {
      return { 'fieldInvalid': true };
    }
    return null;
  }
  
  // isEmpty(){
  //   if(this.el.nativeElement.value.length!=0){
  //     this.el.nativeElement.style.backgroundColor='green';
  //     console.log(this.el.nativeElement.value.length)
  //     return false;
  //   }
  //   else{
  //     this.el.nativeElement.style.backgroundColor='red';
  //     return true;
  //   }
  // }
  
  // @HostListener('keypress') onKeyPress(){}
    
}
