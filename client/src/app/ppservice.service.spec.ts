import { TestBed } from '@angular/core/testing';

import { PPService } from './ppservice.service';

describe('PPServiceService', () => {
  let service: PPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
