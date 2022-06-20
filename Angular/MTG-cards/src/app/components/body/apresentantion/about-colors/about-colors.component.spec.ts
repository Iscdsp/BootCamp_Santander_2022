import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutColorsComponent } from './about-colors.component';

describe('AboutColorsComponent', () => {
  let component: AboutColorsComponent;
  let fixture: ComponentFixture<AboutColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
