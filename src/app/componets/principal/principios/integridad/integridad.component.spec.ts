import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegridadComponent } from './integridad.component';

describe('IntegridadComponent', () => {
  let component: IntegridadComponent;
  let fixture: ComponentFixture<IntegridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
