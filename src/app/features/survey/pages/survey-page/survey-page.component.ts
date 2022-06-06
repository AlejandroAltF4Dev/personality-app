import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { Observable, pluck } from 'rxjs';
import { Survey } from '../../../../shared/interfaces/isurvey';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.scss'],
})
export class SurveyPageComponent implements OnInit {
  survey$ = this.surveyService.loadSurvey().pipe(pluck('survey'));

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {}
}
