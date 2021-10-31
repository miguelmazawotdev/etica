import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SietevotosComponent } from './sietevotos.component';

describe('SietevotosComponent', () => {
  let component: SietevotosComponent;
  let fixture: ComponentFixture<SietevotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SietevotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SietevotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
