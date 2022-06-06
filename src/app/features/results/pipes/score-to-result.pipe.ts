import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoreToResult',
})
export class ScoreToResultPipe implements PipeTransform {
  transform(score: number, ...args: unknown[]): unknown {
    return score >= 3 ? 'Extrovert' : 'Introvert';
  }
}
