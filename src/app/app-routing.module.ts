import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuardService } from './user/auth-guard.service';
import { SelectiveStrategyService } from './selective-strategy.service';

const routes: Routes = [
  // { path: 'products', canActivate: [ AuthGuardService ], loadChildren: 'src/app/products/product.module#ProductModule'},
  // require the log-in before loading the product module.
  // { path: 'products', canLoad: [ AuthGuardService ], loadChildren: 'src/app/products/product.module#ProductModule'},
  // again using canActivate coz canLoad blocks preload the module with PreloadAllModules (makes sense)
  {
    path: 'products',
    canActivate: [ AuthGuardService ],
    data: { preload: true},
    loadChildren: 'src/app/products/product.module#ProductModule'
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**',  component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
      {
        // enableTracing: true,
        preloadingStrategy: SelectiveStrategyService
      }
  )],
  exports: [
    RouterModule
  ],
  providers: [
    SelectiveStrategyService
  ]
})
export class AppRoutingModule { }
