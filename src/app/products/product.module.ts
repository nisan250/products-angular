import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';


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
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
