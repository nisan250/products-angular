import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';

// Third Party
// import { NgxLoadingModule } from 'ngx-loading';

// Feature Modules
import { AppRoutingModule } from './app-routing.module';
// import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 } ),
    UserModule,
    MessageModule,
    AppRoutingModule,
    // ProductModule,
    // NgxLoadingModule.forRoot({}),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
