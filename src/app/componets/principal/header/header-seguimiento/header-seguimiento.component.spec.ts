import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSeguimientoComponent } from './header-seguimiento.component';

describe('HeaderSeguimientoComponent', () => {
  let component: HeaderSeguimientoComponent;
  let fixture: ComponentFixture<HeaderSeguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSeguimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
