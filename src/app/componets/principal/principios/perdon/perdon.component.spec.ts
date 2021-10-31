import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdonComponent } from './perdon.component';

describe('PerdonComponent', () => {
  let component: PerdonComponent;
  let fixture: ComponentFixture<PerdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerdonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
