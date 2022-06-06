import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyPageComponent } from './pages/survey-page/survey-page.component';
import { SurveyStepperComponent } from './components/survey-stepper/survey-stepper.component';
import { NbButtonModule, NbCardModule, NbStepperModule } from '@nebular/theme';

@NgModule({
  declarations: [SurveyPageComponent, SurveyStepperComponent],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
  ],
})
export class SurveyModule {}
