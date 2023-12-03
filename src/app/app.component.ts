import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService],

  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})

export class AppComponent {
  title = 'Hari';
  pageViewCount: number = 0;

  isDoubleClickDisabled = false;
  screenshotDetected: boolean = false;
  constructor(private messageService: MessageService,private http: HttpClient) {}

  startTouchY:any;
  ngOnInit() {
  }

  
  @HostListener("window:keydown", ["$event"])
  onKeyPress(event: KeyboardEvent): void {
    // Check if the pressed key is the Print Screen key
    if (event.key === "PrintScreen" || event.key === "PrtScn" || event.key === "PrintScreen" || (event.key === "S" && event.ctrlKey && event.altKey)) {
      event.preventDefault(); // Prevent the default action (e.g., taking a screenshot)
      this.screenshotDetected = true;
      alert("Screenshot Not Allowed");
    }
  }
  
  
  // @HostListener('touchstart', ['$event'])
  // onTouchStart(event: TouchEvent): void {
  //   // Store the initial Y coordinate of the touch
  //   this.startTouchY = event.touches[0].clientY;
  // }
  
  // @HostListener('touchmove', ['$event'])
  // onTouchMove(event: TouchEvent): void {
  //   if (this.startTouchY !== null) {
  //     const deltaY = this.startTouchY - event.touches[0].clientY;
  
  //     // Increase the sensitivity factor
  //     const sensitivity = 2.0;
  //     const scrollDistance = deltaY * sensitivity;
  
  //     console.log("working");
  
  //     this.smoothScrollBy(0, scrollDistance, 300);
  
  //     this.startTouchY = null;
  //   }
  // }
  
  // private smoothScrollBy(x: number, y: number, duration: number): void {
  //   const startTime = performance.now();
  //   const startScrollY = window.scrollY;
  
  //   function step(timestamp: number) {
  //     const progress = Math.min((timestamp - startTime) / duration, 1);
  //     window.scrollTo(x, startScrollY + y * progress);
  
  //     if (progress < 1) {
  //       window.requestAnimationFrame(step);
  //     }
  //   }
  
  //   window.requestAnimationFrame(step);
  // }
  
  
  
  
  
  
  // @HostListener('touchend', ['$event'])
  // onTouchEnd(event: TouchEvent): void {
  //   // Reset the startTouchY when the touch ends
  //   this.startTouchY = null;
  // }
  
  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Screenshot not allowed',
    });
  }
  
  performAction(): void {
    if (!this.isDoubleClickDisabled) {
      this.isDoubleClickDisabled = true;
    }
  }
}
