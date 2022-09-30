import { TestBed } from '@angular/core/testing';

import { SutraService } from './sutra.service';

describe('SutraService', () => {
  let service: SutraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SutraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
