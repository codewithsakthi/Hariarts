import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSwipeScroll]'
})
export class SwipeScrollDirective {
  constructor(private el: ElementRef) {}

  @HostListener('swipeup', ['$event'])
  onSwipeUp(event: any) {
    console.log("working")

    if (event.direction === Hammer.DIRECTION_UP) {
      this.el.nativeElement.scrollBy(0, -100); // Adjust the scroll amount as needed
    }
  }
}
