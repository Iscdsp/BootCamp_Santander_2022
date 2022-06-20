import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardDeckComponent } from './item-card-deck.component';

describe('ItemCardDeckComponent', () => {
  let component: ItemCardDeckComponent;
  let fixture: ComponentFixture<ItemCardDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
