import { Component } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component {
  isDesktop(): boolean {
    // Add your condition here, for example, checking screen width
    return window.innerWidth > 768; // Adjust the value based on your requirement
  }
}
