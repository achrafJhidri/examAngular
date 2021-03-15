import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[isActive]',
})
export class ActiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event.target'])
  onClick(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'class', 'test');
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '👌');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#FF0000');
  }
}
