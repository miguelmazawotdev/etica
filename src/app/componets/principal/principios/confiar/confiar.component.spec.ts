import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiarComponent } from './confiar.component';

describe('ConfiarComponent', () => {
  let component: ConfiarComponent;
  let fixture: ComponentFixture<ConfiarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
