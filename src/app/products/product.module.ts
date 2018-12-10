import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { ProductResolverService } from './product-resolver.service';

import {
  ProductListComponent,
  ProductDetailComponent,
  ProductEditComponent,
  ProductResolverService,
  ProductEditGuard
} from './index';
// import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    // NgxLoadingModule.forRoot({}),
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  providers: [ProductResolverService, ProductEditGuard]
})
export class ProductModule { }
