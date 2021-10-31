import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizResultadoComponent } from './matriz-resultado.component';

describe('MatrizResultadoComponent', () => {
  let component: MatrizResultadoComponent;
  let fixture: ComponentFixture<MatrizResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
