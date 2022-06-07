import { AppStore } from './store.store';

describe('AppStore', () => {
  let store: AppStore;

  beforeEach(() => {
    store = new AppStore();
  });

  it('should save the score in the store', () => {
    spyOn(store, 'saveScore');
    store.saveScore(2);
    expect(store.saveScore).toHaveBeenCalled();
  });
  it('should save the name in the store', () => {
    spyOn(store, 'saveName');
    store.saveName('Alejandro');
    expect(store.saveName).toHaveBeenCalled();
  });
});
