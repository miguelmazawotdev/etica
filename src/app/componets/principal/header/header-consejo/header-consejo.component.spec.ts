import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConsejoComponent } from './header-consejo.component';

describe('HeaderConsejoComponent', () => {
  let component: HeaderConsejoComponent;
  let fixture: ComponentFixture<HeaderConsejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderConsejoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderConsejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
