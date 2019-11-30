import { StoreConfig, EntityState, Store } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface Product {
    id: string;
    name: string;
    seller: string;
    category: string;
    brand: number;
    shippingCost: number | null;
    reviewAverage: number;
    price: number;
    priceCurrency: string;
    description: string;
    imageUrl: string;
}

export interface ProductState extends EntityState<Product> {
    categories: string[];
    sellers: string[];
    reviews: number[];
    cargoCosts: string[];
}

export const initialState: ProductState = {
    categories: [],
    sellers: [],
    reviews: [],
    cargoCosts: []
};


@Injectable()
@StoreConfig({ name: 'products' })
export class ProductStore extends Store<ProductState> {
    constructor() {
        super(initialState);
    }
}
