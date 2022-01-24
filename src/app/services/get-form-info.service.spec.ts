import { TestBed } from '@angular/core/testing';

import { GetFormInfoService } from './get-form-info.service';

describe('GetFormInfoService', () => {
  let service: GetFormInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFormInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
