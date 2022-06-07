import { TestBed } from '@angular/core/testing';

import { LoggedInGuard } from './logged-in.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoggedInGuard', () => {
  let guard: LoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(LoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
