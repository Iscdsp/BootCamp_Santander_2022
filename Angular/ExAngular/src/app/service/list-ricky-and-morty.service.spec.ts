import { TestBed } from '@angular/core/testing';

import { ListRickyAndMortyService } from './list-ricky-and-morty.service';

describe('ListRickyAndMortyService', () => {
  let service: ListRickyAndMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRickyAndMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
