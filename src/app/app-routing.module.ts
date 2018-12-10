import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuardService } from './user/auth-guard.service';

const routes: Routes = [
  { path: 'products', canActivate: [ AuthGuardService ], loadChildren: 'src/app/products/product.module#ProductModule'},
  { path: 'home', component: HomeComponent },
  // path: 'user', loadChildren: './user/user.module#UserModule'
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '**',  component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
     {enableTracing: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
