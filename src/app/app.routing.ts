import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CheckoutComponent} from '../app/components/checkout/checkout.component';
import {OrderConfirmationComponent} from '../app/components/order-confirmation/order-confirmation.component';
import {StoreFrontComponent} from '../app/components/store-front/store-front.component';
import {PopultedCartRouteGuard} from './route-guards/populated-cart-route-guard';

@NgModule({
    exports: [RouterModule],
    imports:[
        RouterModule.forRoot([
            {
                canActivate: [PopultedCartRouteGuard],
                component: CheckoutComponent,
                path: "checkout"
            },
            {
                canActivate: [PopultedCartRouteGuard],
                component: OrderConfirmationComponent,
                path: "confirmed"
            },
            {
                component: StoreFrontComponent,
                path: "**"
            }
        ])       
    ]
})
export class AppRoutingModule{}