import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISurvey } from '../../../shared/interfaces/isurvey';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  dataPath = '/assets/data/data.json';

  constructor(private httpClient: HttpClient) {}

  loadSurvey(): Observable<ISurvey> {
    return this.httpClient.get<ISurvey>(this.dataPath).pipe(
      delay(2000) // Mock server delay
    );
  }
}
