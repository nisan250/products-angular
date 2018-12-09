import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditGuard } from './product-edit.guard';
import { ProductResolverService } from './product-resolver.service';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    resolve: { product: ProductResolverService}
  },
  {
    path: 'products/:id/edit',
    canDeactivate: [ProductEditGuard],
    component: ProductEditComponent,
    resolve: { product: ProductResolverService}
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
