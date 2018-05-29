import {inject, TestBed} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {Router, RouterModule} from '@angular/router';
import {ShoppingCart} from '../models/shopping-cart.model';
import {CartItem} from '../models/cart-item.model';
import {DeliveryOptionDataService} from '../services/delivery-option.service';
import {ProductDataService} from '../services/product.service';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {LocalStorageService, StorageService} from '../services/storage.service'; 
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';


class MockShoppingCartService{
    
}