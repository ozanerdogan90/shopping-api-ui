import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ShoppingState, ShoppingStore, ShoppingCart } from './shopping.store';
import { map } from 'rxjs/operators';

@Injectable()
export class ShoppingQuery extends QueryEntity<ShoppingState, ShoppingCart>  {

  cart$ = this.select(state => state.shoppingCart);
  products$ = this.select(state => state.shoppingCart ? state.shoppingCart.products : []);

  constructor(protected store: ShoppingStore) {
    super(store);
  }
}
