import { TestBed } from '@angular/core/testing';

import { ReqresAPIService } from './reqres-api.service';

describe('ReqresAPIService', () => {
  let service: ReqresAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqresAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
