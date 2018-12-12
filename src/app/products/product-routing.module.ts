import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditGuard } from './product-edit.guard';
import { ProductResolverService } from './product-resolver.service';
import { ProductsResolverService } from './products-resolver.service';
// import { AuthGuardService } from '../user/auth-guard.service';

const routes: Routes = [
// {
  // path: 'products',
  // canActivate: [ AuthGuardService ],
  // children: [
    {
      path: '',
      component: ProductListComponent,
      resolve: { products: ProductsResolverService }
    },
    {
      path: ':id',
      component: ProductDetailComponent,
      resolve: { product: ProductResolverService}
    },
    {
      path: ':id/edit',
      canDeactivate: [ProductEditGuard],
      component: ProductEditComponent,
      resolve: { product: ProductResolverService}
    }
//   ]
// }


  // { path: 'products', component: ProductListComponent },
  // {
  //   path: 'products/:id',
  //   component: ProductDetailComponent,
  //   resolve: { product: ProductResolverService}
  // },
  // {
  //   path: 'products/:id/edit',
  //   canDeactivate: [ProductEditGuard],
  //   component: ProductEditComponent,
  //   resolve: { product: ProductResolverService}
  // }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
