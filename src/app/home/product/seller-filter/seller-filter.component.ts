import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductQuery } from '../state/product.query';

@Component({
    selector: 'app-seller-filter',
    templateUrl: './seller-filter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SellerFilterComponent {
    constructor(private query: ProductQuery) {
    }
    sellers$ = this.query.sellers$;
}

