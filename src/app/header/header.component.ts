import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDesktop(): boolean {
    // Add your condition here, for example, checking screen width
    return window.innerWidth > 768; // Adjust the value based on your requirement
  }
}
