import { ScoreToResultPipe } from './score-to-result.pipe';

describe('ScoreToResultPipe', () => {
  let pipe: ScoreToResultPipe = new ScoreToResultPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms a score greater or equal than 3 into Extrovert', () => {
    expect(pipe.transform(3)).toBe('Extrovert');
  });
  it('transforms a score lesser than 3 into Introvert', () => {
    expect(pipe.transform(2)).toBe('Introvert');
  });
});
