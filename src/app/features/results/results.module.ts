import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { ResultsComponent } from './components/results/results.component';
import { NbButtonModule, NbSpinnerModule } from '@nebular/theme';
import { ScoreToResultPipe } from './pipes/score-to-result.pipe';

@NgModule({
  declarations: [ResultsPageComponent, ResultsComponent, ScoreToResultPipe],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    NbButtonModule,
    NbSpinnerModule,
  ],
})
export class ResultsModule {}
