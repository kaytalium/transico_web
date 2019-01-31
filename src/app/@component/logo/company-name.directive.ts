import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[company-name]'
})
export class CompanyNameDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = "red"
   }

}
