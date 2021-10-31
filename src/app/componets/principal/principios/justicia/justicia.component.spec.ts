import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JusticiaComponent } from './justicia.component';

describe('JusticiaComponent', () => {
  let component: JusticiaComponent;
  let fixture: ComponentFixture<JusticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JusticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JusticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
