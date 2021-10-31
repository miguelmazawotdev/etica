import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprenderComponent } from './comprender.component';

describe('ComprenderComponent', () => {
  let component: ComprenderComponent;
  let fixture: ComponentFixture<ComprenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
