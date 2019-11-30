import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface ShoppingCart {
    id: string;
    products: Product[];
}

export interface Product {
    id: string;
    name: string;
    quantity: number;
}

export interface ShoppingState {
    shoppingCart: ShoppingCart;
}

export const initialState: ShoppingState = {
    shoppingCart: JSON.parse(localStorage.getItem('shoppingCart')) || {}
};

@Injectable()
@StoreConfig({ name: 'shopping-cart' })
export class ShoppingStore extends Store<ShoppingState> {
    constructor() {
        super(initialState);
    }
}
