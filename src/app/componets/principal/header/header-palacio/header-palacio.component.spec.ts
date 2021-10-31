import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPalacioComponent } from './header-palacio.component';

describe('HeaderPalacioComponent', () => {
  let component: HeaderPalacioComponent;
  let fixture: ComponentFixture<HeaderPalacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPalacioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPalacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
