import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejosDeSabiduriaComponent } from './consejos-de-sabiduria.component';

describe('ConsejosDeSabiduriaComponent', () => {
  let component: ConsejosDeSabiduriaComponent;
  let fixture: ComponentFixture<ConsejosDeSabiduriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsejosDeSabiduriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsejosDeSabiduriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
