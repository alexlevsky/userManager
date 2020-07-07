import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {

  constructor(public el: ElementRef) {
   }

   @Input('appExample') highlightColor: string;
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
