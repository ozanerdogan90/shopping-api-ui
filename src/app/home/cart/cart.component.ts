import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingQuery } from '../state/shopping/shopping.query';
import { ProductService } from '../product/state/product.service';
import { zip } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    templateUrl: 'cart.component.html',
    selector: 'app-cart',
    styleUrls: ['cart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
    constructor(private shoppingCartQuery: ShoppingQuery, private productService: ProductService) {
    }
    totalPrice;
    prd$ = zip(
        this.productService.getAllProducts(),
        this.shoppingCartQuery.products$
    ).pipe(map(([products, cartItems]) => {
        let data = [];
        cartItems.forEach(cartItem => {
            const product = products.find(x => x.id === cartItem.id);
            data.push({ ...product, ...cartItem });
        });
        return data;
    }),
        tap(data => {
            this.totalPrice = data
                .map(x => x.quantity * x.price)
                .reduce((a, b) => a + b, 0) + ' ' + data[0].priceCurrency;
        }));
}
