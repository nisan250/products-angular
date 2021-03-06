import { Component, OnInit, VERSION  } from '@angular/core';
import { AuthService } from './user/auth.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';
import { MessageService } from './messages/message.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'wn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Products-NG';
  navbarOpen = false;
  loading = true;

  constructor(private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private angularVersionTitle: Title
    ) {
    router.events.subscribe((routerEvent: Event) => {
      this.handleRouterEvent(routerEvent);
    });
   }

  ngOnInit() {
    this.angularVersionTitle.setTitle(`${this.title}  (ver ${VERSION.full})`);
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

  displayMessages (): void {
    console.log('display');
    this.router.navigate([{ outlets: { popup: ['messages'] }}]);
    this.messageService.isDisplayed = true;
    this.toggleNavbar();
  }
  hideMessages (): void {
    console.log('hide');
    this.router.navigate([{ outlets: { popup: null }}]);
    this.messageService.isDisplayed = false;
    this.toggleNavbar();
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate([{ outlets: { popup: null }}]);
    this.messageService.isDisplayed = false;
    this.router.navigateByUrl('/home');
    this.toggleNavbar();
    // console.log('Log out');
  }
}
