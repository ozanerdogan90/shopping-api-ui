import { Injectable } from '@angular/core';
import { ShoppingStore, ShoppingState, ShoppingCart, Product } from './shopping.store';
import * as uuid from 'uuid';

@Injectable()
export class ShoppingService {

    constructor(
        private store: ShoppingStore,
    ) { }

    create() {
        const cart = {} as ShoppingCart;
        cart.id = uuid();
        cart.products = [];
        this.store.update({ shoppingCart: cart });
    }

    update(newProduct: Product) {
        this.store.update((state: ShoppingState) => {
            const cart: ShoppingCart = { ...state.shoppingCart };
            if (!cart) {
                return;
            }

            let productToUpdate: Product = cart.products.find(_product => _product.id === newProduct.id);
            if (productToUpdate) {
                productToUpdate.quantity += newProduct.quantity;
            } else {
                productToUpdate = newProduct;
            }

            cart.products.push(productToUpdate);
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
            return { shoppingCart: cart };
        });
    }
}
