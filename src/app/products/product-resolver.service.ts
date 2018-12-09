
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

import { ProductService } from './product.service';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product> {

  constructor(private productService: ProductService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = +route.params['id'];
    return this.productService.getProduct(id);

    // const id = route.params['id'];
    // if (isNaN(id)) {
    //   console.log(`product id is not a number: ${id}`);
    //   this.router.navigate(['/products']);
    //   return of(null);
    // }
    // return this.productService.getProduct(+id)
    //   .pipe(map(product => {
    //     if (product) {
    //       return product;
    //     }
    //     console.log(`product not found: ${id}`);
    //     this.router.navigate(['/products']);
    //     return null;
    //   }))
    //   .pipe(catchError(error => {
    //     console.log(`rerieval error: ${error}`);
    //     this.router.navigate(['/products']);
    //     return Observable.of(null);
    //   }));
  }
}
