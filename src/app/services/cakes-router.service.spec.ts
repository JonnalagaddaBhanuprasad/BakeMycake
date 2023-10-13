import { TestBed } from '@angular/core/testing';

import { CakesRouterService } from './cakes-router.service';

describe('CakesRouterService', () => {
  let service: CakesRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakesRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
