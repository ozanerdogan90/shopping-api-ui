import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductQuery } from '../state/product.query';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
    constructor(private query: ProductQuery) {
    }
    categories$ = this.query.categories$;
}

