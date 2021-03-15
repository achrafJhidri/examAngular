import {
  Directive,
  ElementRef,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[isActive]',
})
export class ActiveDirective implements OnChanges,OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    console.log('hello');

  }

  ngOnChanges(): void {
    console.log('test');
  }
}
