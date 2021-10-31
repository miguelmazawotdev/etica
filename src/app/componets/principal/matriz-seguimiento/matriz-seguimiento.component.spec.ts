import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizSeguimientoComponent } from './matriz-seguimiento.component';

describe('MatrizSeguimientoComponent', () => {
  let component: MatrizSeguimientoComponent;
  let fixture: ComponentFixture<MatrizSeguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizSeguimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
