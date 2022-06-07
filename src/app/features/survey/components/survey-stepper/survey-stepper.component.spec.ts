import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyStepperComponent } from './survey-stepper.component';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('SurveyStepperComponent', () => {
  let component: SurveyStepperComponent;
  let fixture: ComponentFixture<SurveyStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [FormBuilder],
      declarations: [SurveyStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SurveyStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
