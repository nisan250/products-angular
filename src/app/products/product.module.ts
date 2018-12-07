import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';
import {
  ProductListComponent,
  ProductDetailComponent,
  ProductEditComponent,
  ProductEditGuard
} from './index';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
    InMemoryWebApiModule.forRoot(ProductData),
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
