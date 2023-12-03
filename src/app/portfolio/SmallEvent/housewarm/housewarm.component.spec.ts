import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousewarmComponent } from './housewarm.component';

describe('HousewarmComponent', () => {
  let component: HousewarmComponent;
  let fixture: ComponentFixture<HousewarmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousewarmComponent]
    });
    fixture = TestBed.createComponent(HousewarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
