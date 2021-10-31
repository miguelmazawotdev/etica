import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderResultadoComponent } from './header-resultado.component';

describe('HeaderResultadoComponent', () => {
  let component: HeaderResultadoComponent;
  let fixture: ComponentFixture<HeaderResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
