import { SurveyService } from './survey.service';
import { Survey } from '../../../shared/interfaces/isurvey';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('SurveyService', () => {
  let service: SurveyService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SurveyService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a survey', function (done: DoneFn) {
    const expectedSurvey: Survey = {
      title: 'Title test',
      questions: [
        {
          question: 'Question 1',
          imageSrc: '',
          number: 1,
          options: [
            { answer: 'Answer 1', value: 1 },
            { answer: 'Answer 2', value: 2 },
            { answer: 'Answer 3', value: 3 },
          ],
        },
        {
          question: 'Question 2',
          imageSrc: '',
          number: 2,
          options: [
            { answer: 'Answer 1', value: 1 },
            { answer: 'Answer 2', value: 2 },
            { answer: 'Answer 3', value: 3 },
          ],
        },
      ],
    };
    httpClientSpy.get.and.returnValue(of({ survey: expectedSurvey }));

    service.loadSurvey().subscribe({
      next: (data) => {
        expect(data.survey).toEqual(expectedSurvey);
        done();
      },
    });
  });
});
