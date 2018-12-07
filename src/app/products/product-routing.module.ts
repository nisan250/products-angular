import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditGuard } from './product-edit.guard';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'productcs/:id', component: ProductDetailComponent },
  {
    path: 'products/:id/edit',
    canDeactivate: [ProductEditGuard],
    component: ProductEditComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
