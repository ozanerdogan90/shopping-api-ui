import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ProductState, ProductStore } from './product.store';

@Injectable()
export class ProductQuery extends Query<ProductState>  {

  cargoCosts$ = this.select(state => state.cargoCosts);
  reviews$ = this.select(state => state.reviews);
  categories$ = this.select(state => state.categories);
  sellers$ = this.select(state => state.sellers);

  constructor(protected store: ProductStore) {
    super(store);
  }
}
