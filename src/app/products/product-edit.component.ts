import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscription, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Product } from './product';
import { ProductService } from './product.service';

import { NumberValidators, GenericValidator } from '../shared/index';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  loading = false;
  imgSrc = '';
  pageTitle = 'Product Edit';
  errorMessage: string;
  productForm: FormGroup;

  product: Product;
  private sub: Subscription;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  get tags(): FormArray {
    return <FormArray>this.productForm.get('tags');
  }

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {

    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      productName: {
        required: 'Product name is required.',
        minlength: 'Product name must be at least three characters.',
        maxlength: 'Product name cannot exceed 50 characters.'
      },
      productCode: {
        required: 'Product code is required.'
      },
      starRating: {
        range: 'Rate the product between 1 (lowest) and 5 (highest).'
      },
      imageUrl: {
        required: 'Url Image code is required.',
        minlength: 'Product name must be at least three characters.',
        pattern: 'Must be a png, jpg or svg url '
      },
      price: {
        required: 'price is required.',
        pattern: 'accepts numbers with a maximum of 2 decimal places and with a dot separator.',
      },
      releaseDate: {
        required: 'Release Date is required.',
        pattern: 'accepts valid date dd/mm/yyyy.',
      }
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      productCode: ['', Validators.required],
      starRating: ['', NumberValidators.range(1, 5)],
      tags: this.fb.array([]),
      description: '',
      price: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      releaseDate: ['', [Validators.required, Validators.pattern(`^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$`)]],
      imageUrl: ['', [Validators.required, Validators.pattern('.*\/.*.(png|jpg|svg)')]],
    });

    // Read the product Id from the route parameter
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getProduct(id);
      }
    );

    this.productForm.get('imageUrl').valueChanges.subscribe(
      value => {
        this.imgSrc = value;
        console.log(value);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.productForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.productForm);
    });
  }

  addTag(): void {
    this.tags.push(new FormControl());
  }

  deleteTag(index: number): void {
    this.tags.removeAt(index);
    this.tags.markAsDirty();
  }

  getProduct(id: number): void {
    this.loading = true;
    this.productService.getProduct(id)
      .subscribe(
        (product: Product) => {
          this.loading = false;
          console.log('nisan', product);
          return this.displayProduct(product);
        },
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayProduct(product: Product): void {
    if (this.productForm) {
      this.productForm.reset();
    }
    this.product = product;

    if (this.product.id === 0) {
      this.pageTitle = 'Add Product';
    } else {
      this.pageTitle = `Edit Product: ${this.product.productName}`;
    }
    console.log(this.product);
    // Update the data on the form
    this.productForm.patchValue({
      productName: this.product.productName,
      productCode: this.product.productCode,
      starRating: this.product.starRating,
      description: this.product.description,
      imageUrl: this.product.imageUrl,
      price: this.product.price,
      releaseDate: this.product.releaseDate
    });
    this.productForm.setControl('tags', this.fb.array(this.product.tags || []));
  }

  deleteProduct(): void {
    if (this.product.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the product: ${this.product.productName}?`)) {
        this.loading = true;
        this.productService.deleteProduct(this.product.id)
          .subscribe(
            () => {
              this.loading = false;
              return this.onSaveComplete();
            },
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        const p = { ...this.product, ...this.productForm.value };

        if (p.id === 0) {
          this.productService.createProduct(p)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
            );
        } else {
          this.productService.updateProduct(p)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
            );
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.productForm.reset();
    this.router.navigate(['/products']);
  }
}