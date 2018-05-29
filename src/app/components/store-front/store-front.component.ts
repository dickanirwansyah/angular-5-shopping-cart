import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Product} from '../../models/product.models';
import {ShoppingCart} from '../../models/shopping-cart.model';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {ProductDataService} from '../../services/product.service';
import {Observable} from 'rxjs/Observable'; 
import {Observer} from 'rxjs/Observer';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.scss']
})
export class StoreFrontComponent implements OnInit {

  public products: Observable<Product[]>;

  constructor(
    private productService: ProductDataService,
    private shoppingCartService: ShoppingCartService
  ) {}

  public addProductToCart(product: Product): void{
    this.shoppingCartService.addItem(product, 1);
  }

  public removeProductFromCart(product: Product):void{
    this.shoppingCartService.addItem(product, -1);
  }

  public productInCart(product: Product): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
        .get()
        .subscribe((cart) => {
          obs.next(cart.items.some((i) => i.productId === product.id));
          obs.complete();
        });
        sub.unsubscribe();
    });
  }

  public ngOnInit(): void {
    this.products = this.productService.all();
  }

}
