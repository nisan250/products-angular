import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';

@Component({
  selector: 'wn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Products-NG';
  navbarOpen = false;
  loading = true;

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.handleRouterEvent(routerEvent);
    });
   }

  handleRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
        this.loading = false;
    }
  }

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
