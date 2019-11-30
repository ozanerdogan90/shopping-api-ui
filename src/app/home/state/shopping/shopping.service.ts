import { Injectable } from '@angular/core';
import { ShoppingStore, ShoppingState, ShoppingCart, Product } from './shopping.store';
import * as uuid from 'uuid';

@Injectable()
export class ShoppingService {

    constructor(
        private store: ShoppingStore,
    ) {
    }

    create() {
        let cart = {} as ShoppingCart;
        cart.id = uuid();
        cart.products = [];
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        this.store.update({ shoppingCart: cart });
        return cart;
    }

    update(newProduct: Product) {
        this.store.update((state: ShoppingState) => {
            let cart: ShoppingCart = { ...state.shoppingCart };
            if (!cart || !cart.id) {
                cart = Object.assign({}, this.create());
            }

            let productToUpdate: Product = cart.products.find(_product => _product.id === newProduct.id);
            if (productToUpdate) {
                productToUpdate.quantity += newProduct.quantity;
            } else {
                cart.products = [...cart.products, newProduct];
            }

            localStorage.setItem('shoppingCart', JSON.stringify(cart));
            return { ...state, shoppingCart: cart };
        });
    }

    deleteProduct(product: Product) {
        this.store.update((state: ShoppingState) => {
            const cart: ShoppingCart = { ...state.shoppingCart };
            if (!cart) {
                return;
            }

            cart.products = cart.products.filter(prd => prd.id !== product.id);
            localStorage.setItem('shoppingCart', JSON.stringify(cart));
            return { shoppingCart: cart };
        });
    }
}
