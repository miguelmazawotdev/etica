import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrincipioComponent } from './header-principio.component';

describe('HeaderPrincipioComponent', () => {
  let component: HeaderPrincipioComponent;
  let fixture: ComponentFixture<HeaderPrincipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPrincipioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPrincipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
