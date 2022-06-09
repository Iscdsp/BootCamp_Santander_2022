import { TestBed } from '@angular/core/testing';

import { ProductionListService } from './production-list.service';

describe('ProductionListService', () => {
  let service: ProductionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
