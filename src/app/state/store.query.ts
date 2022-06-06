import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AppStore, StoreState } from './store.store';
import { delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StoreQuery extends Query<StoreState> {
  isLoggedIn$ = this.select((state) => !!state.name);
  name$ = this.select('name');
  score$ = this.select('score').pipe(delay(3000));
  constructor(protected override store: AppStore) {
    super(store);
  }
}
