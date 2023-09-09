import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisableDoubleClick]'
})
export class DisableDoubleClickDirective {
  constructor() { }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: Event): void {
    event.preventDefault();
  }
}
