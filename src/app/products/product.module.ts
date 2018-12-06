import { NgModule } from '@angular/core';

// third party
import { NgxLoadingModule } from 'ngx-loading';
// -----------------

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
    ],
  imports: [
    ProductRoutingModule,
    NgxLoadingModule.forRoot({})
  ]
})

export class ProductModule { }




