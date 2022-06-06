import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyStepperComponent } from './survey-stepper.component';

describe('SurveyStepperComponent', () => {
  let component: SurveyStepperComponent;
  let fixture: ComponentFixture<SurveyStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
