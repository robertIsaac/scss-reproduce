import { TestBed } from '@angular/core/testing';

import { ScssReproduceService } from './scss-reproduce.service';

describe('ScssReproduceService', () => {
  let service: ScssReproduceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScssReproduceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
