import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AppStore, StoreState } from './store.store';

@Injectable({ providedIn: 'root' })
export class StoreQuery extends Query<StoreState> {
  isLoggedIn$ = this.select((state) => !!state.name);
  name$ = this.select('name');
  score$ = this.select('score');
  constructor(protected override store: AppStore) {
    super(store);
  }
}
