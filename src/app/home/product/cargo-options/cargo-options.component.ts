import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductQuery } from '../state/product.query';

@Component({
    selector: 'app-cargo-options',
    templateUrl: './cargo-options.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CargoOptionsComponent {

    constructor(private query: ProductQuery) {
    }
    cargoOptions$ = this.query.cargoCosts$;

}

