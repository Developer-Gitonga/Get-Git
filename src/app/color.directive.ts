import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.style.color = "#fff";
  }
}