import { TestBed } from '@angular/core/testing';

import { OrderrequestService } from './orderrequest.service';

describe('OrderrequestService', () => {
  let service: OrderrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
