import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalaciodessabiduriaComponent } from './palaciodessabiduria.component';

describe('PalaciodessabiduriaComponent', () => {
  let component: PalaciodessabiduriaComponent;
  let fixture: ComponentFixture<PalaciodessabiduriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalaciodessabiduriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalaciodessabiduriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
