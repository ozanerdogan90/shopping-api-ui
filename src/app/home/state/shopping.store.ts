import { Store, StoreConfig, EntityState, EntityStore } from '@datorama/akita';
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

export interface ShoppingState extends EntityState<ShoppingCart> {
    shoppingCart: ShoppingCart;
}

export const initialState: ShoppingState = {
    shoppingCart: JSON.parse(localStorage.getItem('shoppingCart')) || null
};


@Injectable()
@StoreConfig({ name: 'shopping-cart' })
export class ShoppingStore extends EntityStore<ShoppingState, ShoppingCart> {
    constructor() {
        super(initialState);
    }
}
