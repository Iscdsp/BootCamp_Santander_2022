import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloServiceComponent } from './modulo-service.component';

describe('ModuloServiceComponent', () => {
  let component: ModuloServiceComponent;
  let fixture: ComponentFixture<ModuloServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
