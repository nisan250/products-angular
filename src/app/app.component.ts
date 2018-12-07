import { Component } from '@angular/core';

@Component({
  selector: 'wn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Products-NG';
  navbarOpen = false;
  constructor() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
