import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { shouldLeaveGuard } from './should-leave.guard';

describe('shouldLeaveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => shouldLeaveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
