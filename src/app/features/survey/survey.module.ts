import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyPageComponent } from './pages/survey-page/survey-page.component';
import { SurveyStepperComponent } from './components/survey-stepper/survey-stepper.component';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbRadioModule,
  NbSpinnerModule,
  NbStepperModule,
} from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SurveyPageComponent, SurveyStepperComponent],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbRadioModule,
    NbProgressBarModule,
    NbSpinnerModule,
    ReactiveFormsModule,
  ],
})
export class SurveyModule {}
