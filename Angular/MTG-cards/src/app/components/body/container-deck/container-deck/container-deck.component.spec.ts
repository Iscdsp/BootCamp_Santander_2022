import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDeckComponent } from './container-deck.component';

describe('ContainerDeckComponent', () => {
  let component: ContainerDeckComponent;
  let fixture: ComponentFixture<ContainerDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
