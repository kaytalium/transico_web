import { Directive, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  constructor(private _elementRef: ElementRef) { }

  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter()

  @HostListener('document:click',['$event.target']) onMouseEnter(targetElement){
    const clickedInside = this._elementRef.nativeElement.contains(targetElement)
    if(!clickedInside){
      this.clickOutside.emit(true)
    }else{
      this.clickOutside.emit(false)
    }
  }

}