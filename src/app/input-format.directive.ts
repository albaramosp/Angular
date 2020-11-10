import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;

  constructor(private element: ElementRef) { 
    
  }

  @HostListener('blur') onBlur(){
    let value: string = this.element.nativeElement.value;
    
    if (this.format== 'lowercase')
      this.element.nativeElement.value = value.toLowerCase();
    else
      this.element.nativeElement.value = value.toUpperCase();
    
  }
}
