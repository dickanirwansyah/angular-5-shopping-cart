import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from '../models/product.models';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {CachingServiceBase} from '../services/caching.service';

let count = 0;

@Injectable()
export class ProductDataService extends CachingServiceBase{

    private products: Observable<Product[]>;

    public constructor(private http:Http){
        super();
    }

    public all():Observable<Product[]>{
        return this.cache<Product[]>(()=>this.products, 
    (val : Observable<Product[]>) => this.products = val, 
    () => this.http
        .get("./assets/product.json")
        .map((response) => response.json()
        .map((item) => {
            let model = new Product();
            model.updateFrom(item);
            return model;
        })));
    }
}