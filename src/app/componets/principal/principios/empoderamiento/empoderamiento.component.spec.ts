import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoderamientoComponent } from './empoderamiento.component';

describe('EmpoderamientoComponent', () => {
  let component: EmpoderamientoComponent;
  let fixture: ComponentFixture<EmpoderamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoderamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoderamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
