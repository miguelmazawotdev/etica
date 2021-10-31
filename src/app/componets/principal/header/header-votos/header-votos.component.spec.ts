import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVotosComponent } from './header-votos.component';

describe('HeaderVotosComponent', () => {
  let component: HeaderVotosComponent;
  let fixture: ComponentFixture<HeaderVotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderVotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderVotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
