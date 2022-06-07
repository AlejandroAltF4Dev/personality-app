import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPageComponent } from './survey-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SurveyPageComponent', () => {
  let component: SurveyPageComponent;
  let fixture: ComponentFixture<SurveyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SurveyPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SurveyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
