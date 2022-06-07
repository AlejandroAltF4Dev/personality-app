import { Injectable } from '@angular/core';
import { AppStore } from './store.store';

@Injectable({ providedIn: 'root' })
export class StoreService {
  constructor(private appStore: AppStore) {}

  updateName(name: string) {
    this.appStore.saveName(name);
  }

  saveAnswers(answers: any[]) {
    const score = this.getScore(answers);
    this.appStore.saveScore(score);
  }
  private getScore(answers: any[]) {
    const values = answers.map((answer) => answer.value);
    return values.reduce((sum, value) => (sum += value), 0) / answers.length;
  }

  resetStore() {
    this.appStore.reset();
  }
}
