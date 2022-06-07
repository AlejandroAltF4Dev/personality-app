import { Component, Input, OnInit } from '@angular/core';
import { Survey } from '../../../../shared/interfaces/isurvey';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { StoreService } from '../../../../state/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-stepper',
  templateUrl: './survey-stepper.component.html',
  styleUrls: ['./survey-stepper.component.scss'],
})
export class SurveyStepperComponent implements OnInit {
  _survey?: Survey;
  forms: FormArray;

  @Input()
  set survey(survey: Survey) {
    const controls =
      survey?.questions?.map((question, index) => {
        return this.fb.group({
          index: [index, [Validators.required]],
          value: ['', [Validators.required]],
        });
      }) || [];

    this.forms = this.fb.array(controls);
    this._survey = survey;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {}

  goToResults() {
    this.storeService.saveAnswers(this.forms.value);
    this.router.navigate(['/results']);
  }
}
