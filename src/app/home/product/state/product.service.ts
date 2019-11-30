import { Injectable } from '@angular/core';
import { ProductStore, Product } from './product.store';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class ProductService {

    constructor(
        private store: ProductStore,
        private httpClient: HttpClient
    ) { }

    getAllProducts() {
        return this.httpClient.get<Product[]>(environment.baseUrl).pipe(tap(
            products => {
                if (products) {
                    this.addSellers(products);
                    this.addCategories(products);
                    this.addReviews(products);
                    this.addCargoCosts(products);
                }
            }
        ));
    }

    addSellers(products: Product[]) {
        const sellers = Array.from(new Set(products.map(x => x.seller)));
        this.store.update({ sellers: sellers });
    }

    addCategories(products: Product[]) {
        const categories = Array.from(new Set(products.map(x => x.category)));
        this.store.update({ categories: categories });
    }

    addReviews(products: Product[]) {
        const reviews = Array.from(new Set(products.map(x => x.reviewAverage).sort((a, b) => b - a)));
        this.store.update({ reviews: reviews });
    }

    addCargoCosts(products: Product[]) {
        const costs = Array.from(new Set(products.map(x => x.shippingCost ? x.shippingCost + ' ' + x.priceCurrency : 'Free')));
        this.store.update({ cargoCosts: costs });
    }
}
