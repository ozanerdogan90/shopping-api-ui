import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductQuery } from '../state/product.query';

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent {
    constructor(private query: ProductQuery) {
    }
    reviews$ = this.query.reviews$;
}
