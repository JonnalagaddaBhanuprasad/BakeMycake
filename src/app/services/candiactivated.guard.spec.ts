import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { candiactivatedGuard } from './candiactivated.guard';

describe('candiactivatedGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => candiactivatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
