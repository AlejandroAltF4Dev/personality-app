import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { ResultsComponent } from './components/results/results.component';
import { NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [ResultsPageComponent, ResultsComponent],
  imports: [CommonModule, ResultsRoutingModule, NbButtonModule],
})
export class ResultsModule {}
