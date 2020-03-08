import { TestBed } from '@angular/core/testing';

import { TentService } from './tent.service';

describe('TentService', () => {
  let service: TentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
