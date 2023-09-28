import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinehighComponent } from './cinehigh.component';

describe('CinehighComponent', () => {
  let component: CinehighComponent;
  let fixture: ComponentFixture<CinehighComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinehighComponent]
    });
    fixture = TestBed.createComponent(CinehighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
