import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponent } from './greeting.component';
import { FormBuilder } from '@angular/forms';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;
  let input: HTMLInputElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreetingComponent],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    const html: HTMLElement = fixture.nativeElement;
    input = html.querySelector('input');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('startClicked event should not emit when clicked without a name', () => {
    spyOn(component.startClicked, 'emit');
    input.value = '';
    component.startSurvey();
    expect(component.startClicked.emit).not.toHaveBeenCalled();
  });
});
