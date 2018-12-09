import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Products-NG';
  navbarOpen = false;

  constructor(private authService: AuthService, private router: Router) { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home');
    this.toggleNavbar();
    // console.log('Log out');
  }
}
