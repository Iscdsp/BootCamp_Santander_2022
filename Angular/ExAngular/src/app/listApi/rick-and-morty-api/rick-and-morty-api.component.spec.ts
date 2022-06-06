import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyApiComponent } from './rick-and-morty-api.component';

describe('RickAndMortyApiComponent', () => {
  let component: RickAndMortyApiComponent;
  let fixture: ComponentFixture<RickAndMortyApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickAndMortyApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickAndMortyApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
