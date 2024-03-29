import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingQuery } from '../state/shopping/shopping.query';
import { map } from 'rxjs/operators';

@Component({
    templateUrl: 'nav-bar.component.html',
    selector: 'app-nav-bar',
    styleUrls: ['nav-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
    /**
     *
     */
    constructor(private shoppingCartQuery: ShoppingQuery) {
    }
    productCount$ = this.shoppingCartQuery.products$.pipe(map(products => products.length));
}
