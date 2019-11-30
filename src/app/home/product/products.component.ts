import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from './state/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
    constructor(private productService: ProductService) { }
    products$ = this.productService.getAllProducts();
    ngOnInit(): void {
    }
}

