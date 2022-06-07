import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface StoreState {
  name?: string;
  score?: number;
}

export function createInitialState(): StoreState {
  return {
    name: '',
    score: 0,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'surveyApp', resettable: true })
export class AppStore extends Store<StoreState> {
  constructor() {
    super(createInitialState());
  }
  saveScore(score: number) {
    this.update({
      score,
    });
  }
  saveName(name: string) {
    this.update({
      name,
    });
  }
}
