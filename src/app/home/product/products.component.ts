import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from './state/product.service';
import { Product } from './state/product.store';
import { ShoppingService } from '../state/shopping/shopping.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
    constructor(private productService: ProductService,
        private shoppingCartService: ShoppingService) { }
    products$ = this.productService.getAllProducts();
    ngOnInit(): void {
    }

    addProduct(product: any) {
        this.shoppingCartService.update({ id: product.id, quantity: 1 });
    }
}

