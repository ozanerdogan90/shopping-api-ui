import { Component } from '@angular/core';
import { ShoppingQuery } from '../state/shopping/shopping.query';
import { map } from 'rxjs/operators';

@Component({
    templateUrl: 'cart.component.html',
    selector: 'app-cart',
    styleUrls: ['cart.component.scss']
})
export class CartComponent {

    constructor(private shoppingCartQuery: ShoppingQuery) {
    }
    cart$ = this.shoppingCartQuery.cart$.pipe(map(cart => cart));
}
