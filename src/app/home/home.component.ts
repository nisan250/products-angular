import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pageTitle = 'Welcome';
  public loading = false;

  constructor() { }

  ngOnInit() {
    // this.loading = true;
  }

}
