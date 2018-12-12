(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-products-product-module"],{

/***/ "./src/app/products/index.ts":
/*!***********************************!*\
  !*** ./src/app/products/index.ts ***!
  \***********************************/
/*! exports provided: ProductListComponent, ProductDetailComponent, ProductEditComponent, ProductEditGuard, ProductResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return _product_list_component__WEBPACK_IMPORTED_MODULE_0__["ProductListComponent"]; });

/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/products/product-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return _product_detail_component__WEBPACK_IMPORTED_MODULE_1__["ProductDetailComponent"]; });

/* harmony import */ var _product_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-edit.component */ "./src/app/products/product-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return _product_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProductEditComponent"]; });

/* harmony import */ var _product_edit_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-edit.guard */ "./src/app/products/product-edit.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductEditGuard", function() { return _product_edit_guard__WEBPACK_IMPORTED_MODULE_3__["ProductEditGuard"]; });

/* harmony import */ var _product_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-resolver.service */ "./src/app/products/product-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductResolverService", function() { return _product_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ProductResolverService"]; });








/***/ }),

/***/ "./src/app/products/product-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/products/product-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/product-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/products/product-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card animatedroute\">\n  <div class=\"card-header\"\n       *ngIf=\"product\">\n    {{pageTitle + \": \" + product.productName}}\n  </div>\n\n  <div class=\"card-body\"\n       *ngIf=\"product\">\n\n    <div class=\"row\">\n\n      <div class=\"col-md-8\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">Name:</div>\n          <div class=\"col-md-6\">{{product.productName}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">Code:</div>\n          <div class=\"col-md-6\">{{product.productCode}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">Description:</div>\n          <div class=\"col-md-6\">{{product.description}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">Availability:</div>\n          <div class=\"col-md-6\">{{product.releaseDate}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">Price:</div>\n          <div class=\"col-md-6\">{{product.price|currency:\"USD\":\"symbol\"}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">5 Star Rating:</div>\n          <div class=\"col-md-6\">\n            <wn-star [rating]=\"product.starRating\">\n            </wn-star>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">Tags:</div>\n          <div class=\"col-md-6\">{{product.tags}}</div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4\"\n           *ngIf=\"product.imageUrl\">\n        <img class=\"center-block img-responsive\"\n             [style.height.px]=\"150\"\n             [style.margin.px]=\"2\"\n             [src]=\"product.imageUrl\"\n             [title]=\"product.productName\">\n      </div>\n    </div>\n\n    <div class=\"row mt-4\">\n      <div class=\"col-md-4\">\n        <button class=\"btn btn-outline-secondary mr-3\"\n                style=\"width:80px\"\n                [routerLink]=\"['/products']\"\n                [preserveQueryParams]=\"true\"><!--(click)=\"onBack()-->\n          <i class=\"fa fa-chevron-left\"></i> Back\n        </button>\n        <button class=\"btn btn-outline-primary\"\n                style=\"width:80px\"\n                [routerLink]=\"['/products', product.id, 'edit']\"\n                [preserveQueryParams]=\"true\">\n          Edit\n        </button>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"alert alert-danger\"\n       *ngIf=\"errorMessage\">{{errorMessage}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-detail.component.ts ***!
  \******************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ProductService } from './product.service';
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, router) {
        this.route = route;
        this.router = router;
        this.pageTitle = 'Product Detail';
        this.errorMessage = '';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        // get data  from a resolve on the route
        this.product = this.route.snapshot.data['product'];
        /* without the resolver
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
          const id = +param;
          this.getProduct(id);
        }
        */
    };
    /* without the resolver
      getProduct(id: number) {
      this.productService.getProduct(id).subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error);
    }
    */
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/products/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/products/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/products/product-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/products/product-edit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  .delete-button {\r\n    margin-top: 6px;\r\n  }\r\n  .add-tag-button{\r\n    margin-top: 26px;\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsaUJBQWlCO0dBQ2xCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5kZWxldGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcbiAgLmFkZC10YWctYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjZweDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/product-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/products/product-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ngx-loading [show]=\"loading\"></ngx-loading> -->\r\n<div class=\"card animatedroute\">\r\n  <div class=\"card-header\">\r\n    {{pageTitle}}\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <form novalidate\r\n          (ngSubmit)=\"saveProduct()\"\r\n          [formGroup]=\"productForm\">\r\n\r\n      <div class=\"form-group row mb-2\">\r\n        <label class=\"col-md-2 col-form-label\"\r\n               for=\"productNameId\">Product Name</label>\r\n        <div class=\"col-md-8\">\r\n          <input class=\"form-control\"\r\n                 id=\"productNameId\"\r\n                 type=\"text\"\r\n                 placeholder=\"Name (required)\"\r\n                 formControlName=\"productName\"\r\n                 [ngClass]=\"{'is-invalid': displayMessage.productName }\" />\r\n          <span class=\"invalid-feedback\">\r\n            {{displayMessage.productName}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row mb-2\">\r\n        <label class=\"col-md-2 col-form-label\"\r\n               for=\"productCodeId\">Product Code</label>\r\n        <div class=\"col-md-8\">\r\n          <input class=\"form-control\"\r\n                 id=\"productCodeId\"\r\n                 type=\"text\"\r\n                 placeholder=\"Code (required)\"\r\n                 formControlName=\"productCode\"\r\n                 [ngClass]=\"{'is-invalid': displayMessage.productCode}\" />\r\n          <span class=\"invalid-feedback\">\r\n            {{displayMessage.productCode}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row mb-2\">\r\n        <label class=\"col-md-2 col-form-label\"\r\n               for=\"starRatingId\">Star Rating (1-5)</label>\r\n\r\n        <div class=\"col-md-8\">\r\n          <input class=\"form-control\"\r\n                 id=\"starRatingId\"\r\n                 type=\"text\"\r\n                 placeholder=\"Rating (1-5)\"\r\n                 formControlName=\"starRating\"\r\n                 [ngClass]=\"{'is-invalid': displayMessage.starRating}\" />\r\n          <span class=\"invalid-feedback\">\r\n            {{displayMessage.starRating}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row mb-2\">\r\n        <label class=\"col-md-2 col-form-label\"\r\n                for=\"priceId\">Price</label>\r\n        <div class=\"col-md-8\">\r\n          <input class=\"form-control\"\r\n                  id=\"priceId\"\r\n                  type=\"number\"\r\n                  placeholder=\"Price (required) (10.50)\"\r\n                  formControlName=\"price\"\r\n                  [ngClass]=\"{'is-invalid': displayMessage.price}\" />\r\n          <span class=\"invalid-feedback\">\r\n            {{displayMessage.price}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row mb-2\">\r\n        <label class=\"col-md-2 col-form-label\"\r\n                for=\"availableId\">Available</label>\r\n        <div class=\"col-md-8\">\r\n          <input class=\"form-control\"\r\n                  id=\"availableId\"\r\n                  type=\"text\"\r\n                  required\r\n                  placeholder=\"Release Date (required) (22/12/2018)\"\r\n                  formControlName=\"releaseDate\"\r\n                  [ngClass]=\"{'is-invalid': displayMessage.releaseDate}\" />\r\n          <span class=\"invalid-feedback\">\r\n            {{displayMessage.releaseDate}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div formArrayName=\"tags\">\r\n        <div class=\"form-group row mb-2\"\r\n             *ngFor=\"let tag of tags.controls; let i=index\">\r\n          <label class=\"col-md-2 col-form-label\"\r\n                 [attr.for]=\"i\">Tag</label>\r\n\r\n          <div class=\"col-md-8\">\r\n            <input class=\"form-control\"\r\n                   [id]=\"i\"\r\n                   type=\"text\"\r\n                   placeholder=\"Tag\"\r\n                   [formControlName]=\"i\" />\r\n          </div>\r\n          <div class=\"col-md-1 delete-button\">\r\n            <button class=\"btn btn-outline-warning btn-sm\"\r\n              type=\"button\"\r\n              title=\"Delete this search tag\"\r\n              (click)=\"deleteTag(i)\">Delete Tag\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-1 mb-2 add-tag-button\">\r\n          <button class=\"btn btn-outline-secondary btn-sm\"\r\n                  type=\"button\"\r\n                  title=\"Add a search tag\"\r\n                  (click)=\"addTag()\">Add Tag\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row mb-2\">\r\n        <label class=\"col-md-2 col-form-label\"\r\n               for=\"descriptionId\">Description</label>\r\n\r\n        <div class=\"col-md-8\">\r\n          <textarea class=\"form-control\"\r\n                    id=\"descriptionId\"\r\n                    placeholder=\"Description\"\r\n                    rows=3\r\n                    formControlName=\"description\"\r\n                    [ngClass]=\"{'is-invalid': displayMessage.description}\"></textarea>\r\n          <span class=\"invalid-feedback\">\r\n            {{ displayMessage.description}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group row mb-2\">\r\n          <label class=\"col-md-2 col-form-label\"\r\n          for=\"urlImageId\">Online Url</label>\r\n\r\n        <div class=\"col-md-8\">\r\n          <input class=\"form-control\"\r\n                  id=\"urlImageId\"\r\n                  type=\"text\"\r\n                  placeholder=\"Online Image Url (required)\"\r\n                  formControlName=\"imageUrl\"\r\n                  [ngClass]=\"{'is-invalid': displayMessage.imageUrl}\"s\r\n                  />\r\n          <span class=\"invalid-feedback\">\r\n             {{displayMessage.imageUrl}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row mb-2\">\r\n        <span class=\"col-md-2 col-form-label\"></span>\r\n        <div class=\"col-md-8\">\r\n          <img *ngIf=\"!displayMessage.imageUrl\" [src]=\"imgSrc\" width=\"100\"/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row mb-2\">\r\n        <div class=\"offset-md-2 col-md-4\">\r\n          <button class=\"btn btn-primary mr-3\"\r\n                  style=\"width:80px;\"\r\n                  type=\"submit\"\r\n                  [title]=\"productForm.valid ? 'Save your entered data' : 'Disabled until the form data is valid'\"\r\n                  [disabled]=\"!productForm.valid\">\r\n            Save\r\n          </button>\r\n          <button class=\"btn btn-outline-secondary mr-3\"\r\n                  style=\"width:80px;\"\r\n                  type=\"button\"\r\n                  title=\"Cancel your edits\"\r\n                  [routerLink]=\"['/products']\"\r\n                  [preserveQueryParams]=\"true\">\r\n            Cancel\r\n          </button>\r\n          <button class=\"btn btn-outline-warning\"\r\n                  style=\"width:80px\"\r\n                  type=\"button\"\r\n                  title=\"Delete this product\"\r\n                  (click)=\"deleteProduct()\">\r\n            Delete\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"alert alert-danger\"\r\n       *ngIf=\"errorMessage\">{{errorMessage}}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/products/product-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-edit.component.ts ***!
  \****************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/index */ "./src/app/shared/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(fb, route, router, productService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.loading = false;
        this.imgSrc = '';
        this.pageTitle = 'Product Edit';
        // Use with the generic validation message class
        this.displayMessage = {};
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
        this.genericValidator = new _shared_index__WEBPACK_IMPORTED_MODULE_6__["GenericValidator"](this.validationMessages);
    }
    Object.defineProperty(ProductEditComponent.prototype, "tags", {
        get: function () {
            return this.productForm.get('tags');
        },
        enumerable: true,
        configurable: true
    });
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productForm = this.fb.group({
            productName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            productCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            starRating: ['', _shared_index__WEBPACK_IMPORTED_MODULE_6__["NumberValidators"].range(1, 5)],
            tags: this.fb.array([]),
            description: '',
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
            releaseDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$")]],
            imageUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('.*\/.*.(png|jpg|svg)')]],
        });
        // Read the product Id from the route parameter - without resolve
        // this.sub = this.route.paramMap.subscribe(
        //   params => {
        //     const id = +params.get('id');
        //     this.getProduct(id);
        //   }
        // );
        // with resolve - but not get updated when form change to new from edit (same page different segment url - ngOnInit)
        // this.product = this.route.snapshot.data['product'];
        // this.displayProduct(this.product);
        // with resolve - using observable
        this.route.data.subscribe(function (data) {
            _this.product = data['product'];
            _this.displayProduct(_this.product);
        });
        this.productForm.get('imageUrl').valueChanges.subscribe(function (value) {
            _this.imgSrc = value;
            // console.log(value);
        });
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    ProductEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, [this.productForm.valueChanges].concat(controlBlurs)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(800)).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.productForm);
        });
    };
    ProductEditComponent.prototype.addTag = function () {
        this.tags.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
    };
    ProductEditComponent.prototype.deleteTag = function (index) {
        this.tags.removeAt(index);
        this.tags.markAsDirty();
    };
    // getProduct(id: number): void {
    //   this.loading = true;
    //   this.productService.getProduct(id)
    //     .subscribe(
    //       (product: Product) => {
    //         this.loading = false;
    //         console.log('nisan', product);
    //         return this.displayProduct(product);
    //       },
    //       (error: any) => this.errorMessage = <any>error
    //     );
    // }
    ProductEditComponent.prototype.displayProduct = function (product) {
        if (this.productForm) {
            this.productForm.reset();
        }
        this.product = product;
        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        }
        else {
            this.pageTitle = "Edit Product: " + this.product.productName;
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
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        var _this = this;
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the product: " + this.product.productName + "?")) {
                this.loading = true;
                this.productService.deleteProduct(this.product.id)
                    .subscribe(function () {
                    _this.loading = false;
                    return _this.onSaveComplete();
                }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        if (this.productForm.valid) {
            if (this.productForm.dirty) {
                var p = __assign({}, this.product, this.productForm.value);
                if (p.id === 0) {
                    this.productService.createProduct(p)
                        .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
                }
                else {
                    this.productService.updateProduct(p)
                        .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
                }
            }
            else {
                this.onSaveComplete();
            }
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    };
    ProductEditComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.productForm.reset();
        this.router.navigate(['/products'], { queryParamsHandling: 'preserve' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", Array)
    ], ProductEditComponent.prototype, "formInputElements", void 0);
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/products/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/products/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/products/product-edit.guard.ts":
/*!************************************************!*\
  !*** ./src/app/products/product-edit.guard.ts ***!
  \************************************************/
/*! exports provided: ProductEditGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditGuard", function() { return ProductEditGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductEditGuard = /** @class */ (function () {
    function ProductEditGuard() {
    }
    ProductEditGuard.prototype.canDeactivate = function (component) {
        if (component.productForm.dirty) {
            var productName = component.productForm.get('productName').value || 'New Product';
            return confirm("Navigate away and lose all changes to " + productName + "?");
        }
        return true;
    };
    ProductEditGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductEditGuard);
    return ProductEditGuard;
}());



/***/ }),

/***/ "./src/app/products/product-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/products/product-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead {\n  color: #337AB7;\n}\n.row {\n  padding-bottom: 1.25rem;\n\n}\n@media (max-width: 767px) {\n  thead {\n    display: none;\n  }\n  tr {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #DFD7CA;\n    margin-top: 26px;\n  }\n  .imageBlock {\n    margin: auto;\n    border-top: none;\n  }\n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSx3QkFBd0I7O0NBRXpCO0FBRUQ7RUFDRTtJQUNFLGNBQWM7R0FDZjtFQUNEO0lBQ0UsY0FBYztJQUNkLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsaUJBQWlCO0dBQ2xCO0VBQ0Q7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0dBQ2xCOztDQUVGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aGVhZCB7XG4gIGNvbG9yOiAjMzM3QUI3O1xufVxuLnJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICB0aGVhZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICB0ciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERkQ3Q0E7XG4gICAgbWFyZ2luLXRvcDogMjZweDtcbiAgfVxuICAuaW1hZ2VCbG9jayB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/product-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/products/product-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ngx-loading [show]=\"loading\"></ngx-loading> -->\n<div class=\"card animatedroute\">\n  <div class=\"card-header\">\n    {{pageTitle}}\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">Filter by:</div>\n      <div class=\"col-md-4\">\n        <input type=\"text\"\n               [(ngModel)]=\"listFilter\" />\n      </div>\n    </div>\n    <div class=\"row\"\n         *ngIf=\"listFilter\">\n      <div class=\"col-md-6\">\n        <h4>Filtered by: {{listFilter}}</h4>\n      </div>\n    </div>\n\n    <div class=\"table-responsive\">\n      <table class=\"table mb-0\"\n             *ngIf=\"products && products.length\">\n        <thead>\n          <tr>\n            <th></th>\n            <th>Product</th>\n            <th>Code</th>\n            <th>Available</th>\n            <th>Price</th>\n            <th>5 Star Rating</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of filteredProducts\">\n            <td class=\"imageBlock\">\n              <img *ngIf=\"product.imageUrl\"\n                   [src]=\"product.imageUrl\"\n                   [title]=\"product.productName\"\n                   [style.width.px]=\"imageWidth\"\n                   [style.margin.px]=\"imageMargin\">\n            </td>\n            <td>\n              <a [routerLink]=\"['/products', product.id]\"\n                  [queryParams]=\"{filterBy: listFilter}\">\n                {{ product.productName }}\n              </a>\n            </td>\n            <td>{{ product.productCode }}</td>\n            <td>{{ product.releaseDate }}</td>\n            <td>{{ product.price | currency:\"USD\":\"symbol\":\"1.2-2\" }}</td>\n            <td>\n              <wn-star [rating]=\"product.starRating\">\n              </wn-star>\n            </td>\n            <td>\n              <button class=\"btn btn-outline-primary btn-sm\"\n                      [routerLink]=\"['/products', product.id, 'edit']\"\n                      [queryParams]=\"{filterBy: listFilter}\">\n                Edit\n              </button>\n         <!-- <button class=\"btn btn-outline-primary btn-sm\"\n                [routerLink]=\"['/products', product.id, 'edit',\n                { outlets: { popup: ['summery', product.id]}]\"\n                [queryParams]=\"{filterBy: listFilter}\">\n                Edit\n              </button> -->\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n</div>\n\n<div *ngIf=\"errorMessage\"\n     class=\"alert alert-danger\">\n  Error: {{ errorMessage }}\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-list.component.ts ***!
  \****************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.errorMessage = '';
        this.loading = false;
        this._listFilter = '';
        this.filteredProducts = [];
        this.products = [];
    }
    Object.defineProperty(ProductListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this.loading = true;
            this._listFilter = value;
            this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
            this.loading = false;
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    ProductListComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.products = this.route.snapshot.data['products'];
        this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
        if (this.listFilter === '') {
            this.filteredProducts = this.products;
        }
        this.loading = false;
        // this.productService.getProducts().subscribe(
        //   products => {
        //     this.products = products;
        //     this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
        //     if (this.listFilter === '') {
        //       this.filteredProducts = this.products;
        //     }
        //     this.loading = false;
        //   },
        //   error => this.errorMessage = <any>error
        // );
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/products/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products/product-resolver.service.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-resolver.service.ts ***!
  \******************************************************/
/*! exports provided: ProductResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolverService", function() { return ProductResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { map, catchError } from 'rxjs/operators';

var ProductResolverService = /** @class */ (function () {
    function ProductResolverService(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ProductResolverService.prototype.resolve = function (route, state) {
        var id = +route.params['id'];
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
    };
    ProductResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductResolverService);
    return ProductResolverService;
}());



/***/ }),

/***/ "./src/app/products/product-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-routing.module.ts ***!
  \****************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component */ "./src/app/products/product-list.component.ts");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/products/product-detail.component.ts");
/* harmony import */ var _product_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-edit.component */ "./src/app/products/product-edit.component.ts");
/* harmony import */ var _product_edit_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-edit.guard */ "./src/app/products/product-edit.guard.ts");
/* harmony import */ var _product_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-resolver.service */ "./src/app/products/product-resolver.service.ts");
/* harmony import */ var _products_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products-resolver.service */ "./src/app/products/products-resolver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { AuthGuardService } from '../user/auth-guard.service';
var routes = [
    // {
    // path: 'products',
    // canActivate: [ AuthGuardService ],
    // children: [
    {
        path: '',
        component: _product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"],
        resolve: { products: _products_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ProductsResolverService"] }
    },
    {
        path: ':id',
        component: _product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"],
        resolve: { product: _product_resolver_service__WEBPACK_IMPORTED_MODULE_6__["ProductResolverService"] }
    },
    {
        path: ':id/edit',
        canDeactivate: [_product_edit_guard__WEBPACK_IMPORTED_MODULE_5__["ProductEditGuard"]],
        component: _product_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProductEditComponent"],
        resolve: { product: _product_resolver_service__WEBPACK_IMPORTED_MODULE_6__["ProductResolverService"] }
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
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/products/product.module.ts":
/*!********************************************!*\
  !*** ./src/app/products/product.module.ts ***!
  \********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _products_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-resolver.service */ "./src/app/products/products-resolver.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/products/product-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./src/app/products/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { ProductResolverService } from './product-resolver.service';

// import { NgxLoadingModule } from 'ngx-loading';
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                // NgxLoadingModule.forRoot({}),
                _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"]
            ],
            declarations: [
                _index__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"],
                _index__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"],
                _index__WEBPACK_IMPORTED_MODULE_5__["ProductEditComponent"]
            ],
            providers: [_index__WEBPACK_IMPORTED_MODULE_5__["ProductResolverService"], _index__WEBPACK_IMPORTED_MODULE_5__["ProductEditGuard"], _products_resolver_service__WEBPACK_IMPORTED_MODULE_0__["ProductsResolverService"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/products/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/products/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productsUrl = 'api/products';
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getProduct = function (id) {
        if (id === 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.initializeProduct());
        }
        var url = this.productsUrl + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('getProduct: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.createProduct = function (product) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        product.id = null;
        return this.http.post(this.productsUrl, product, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('createProduct: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.deleteProduct = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var url = this.productsUrl + "/" + id;
        return this.http.delete(url, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('deleteProduct: ' + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.updateProduct = function (product) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var url = this.productsUrl + "/" + product.id;
        return this.http.put(url, product, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return console.log('updateProduct: ' + product.id); }), 
        // Return the product on an update
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return product; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code " + err.status + ": " + err.body.error;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ProductService.prototype.initializeProduct = function () {
        // Return an initialized object
        return {
            id: 0,
            productName: null,
            productCode: null,
            tags: [''],
            releaseDate: null,
            price: null,
            description: null,
            starRating: null,
            imageUrl: null
        };
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/products/products-resolver.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/products/products-resolver.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsResolverService", function() { return ProductsResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { map, catchError } from 'rxjs/operators';

var ProductsResolverService = /** @class */ (function () {
    function ProductsResolverService(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ProductsResolverService.prototype.resolve = function (route, state) {
        return this.productService.getProducts();
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
    };
    ProductsResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductsResolverService);
    return ProductsResolverService;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-products-product-module.js.map