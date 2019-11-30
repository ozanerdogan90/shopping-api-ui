import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ShoppingState, ShoppingStore } from './shopping.store';

@Injectable()
export class ShoppingQuery extends Query<ShoppingState>  {

  products$ = this.select((state: ShoppingState) => state.shoppingCart.products || []);
  cart$ = this.select(state => state.shoppingCart);

  constructor(protected store: ShoppingStore) {
    super(store);
  }
}
