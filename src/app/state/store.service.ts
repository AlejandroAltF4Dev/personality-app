import { Injectable } from '@angular/core';
import { AppStore, StoreState } from './store.store';

@Injectable({ providedIn: 'root' })
export class StoreService {
  constructor(private appStore: AppStore) {}

  updateName(name: string) {
    this.appStore.update({ name });
  }

  saveAnswers(answers: any[]) {
    const score = this.getScore(answers);
    this.saveScore(score);
  }
  saveScore(score: number) {
    this.appStore.update({
      score,
    });
  }
  private getScore(answers: any[]) {
    const values = answers.map((answer) => answer.value);
    return values.reduce((sum, value) => (sum += value), 0) / answers.length;
  }

  resetStore() {
    this.appStore.reset();
  }
}
