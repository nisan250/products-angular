import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public loading = false;

  constructor() { }

  ngOnInit() {
    // this.loading = true;
  }

}
