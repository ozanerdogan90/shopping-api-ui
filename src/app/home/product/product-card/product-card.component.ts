import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../state/product.store';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
    @Input() product: Product;
    @Output() productAdd = new EventEmitter<Product>();
    constructor() { }
    ngOnInit(): void { }

    addToCart() {
        this.productAdd.emit(this.product);
    }
}

