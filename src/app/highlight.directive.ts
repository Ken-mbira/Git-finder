import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }


  @HostListener('mouseover') onOver() {
    this.el.nativeElement.style.backgroundColor = '#241a1a';
    this.el.nativeElement.style.color = '#ffffff'
  }

  @HostListener('mouseout') onOut() {
    this.el.nativeElement.style.backgroundColor = '#fff';
    this.el.nativeElement.style.color = '#000000'
  }

}
