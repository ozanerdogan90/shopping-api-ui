import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../state/product.store';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
    @Input() product: Product;
    constructor() { }
    ngOnInit(): void { }
}

