import { TestBed } from '@angular/core/testing';

import { ProductsResolverService } from './products-resolver.service';

describe('ProductsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsResolverService = TestBed.get(ProductsResolverService);
    expect(service).toBeTruthy();
  });
});
