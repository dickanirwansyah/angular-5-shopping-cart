import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { StoreFrontComponent } from './components/store-front/store-front.component';
import {PopultedCartRouteGuard} from './route-guards/populated-cart-route-guard';
import {DeliveryOptionDataService} from './services/delivery-option.service';
import {ProductDataService} from './services/product.service';
import {ShoppingCartService} from './services/shopping-cart.service';
import {LocalStorageService, StorageService} from './services/storage.service';
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    ShoppingCartComponent,
    StoreFrontComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ProductDataService,
    DeliveryOptionDataService,
    PopultedCartRouteGuard,
    LocalStorageService,
    {provide : StorageService, useClass: LocalStorageService},
    {
      deps: [StorageService, ProductDataService, DeliveryOptionDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
