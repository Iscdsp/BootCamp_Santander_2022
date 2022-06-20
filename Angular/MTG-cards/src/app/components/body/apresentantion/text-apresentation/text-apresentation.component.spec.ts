import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextApresentationComponent } from './text-apresentation.component';

describe('TextApresentationComponent', () => {
  let component: TextApresentationComponent;
  let fixture: ComponentFixture<TextApresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextApresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextApresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
