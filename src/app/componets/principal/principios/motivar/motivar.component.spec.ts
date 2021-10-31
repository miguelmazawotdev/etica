import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivarComponent } from './motivar.component';

describe('MotivarComponent', () => {
  let component: MotivarComponent;
  let fixture: ComponentFixture<MotivarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
