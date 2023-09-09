import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
  isDoubleClickDisabled = false;

  performAction(): void {
    if (!this.isDoubleClickDisabled) {
      // Perform your action here

      // After performing the action, set the flag to true
      this.isDoubleClickDisabled = true;
    }
  }
}
