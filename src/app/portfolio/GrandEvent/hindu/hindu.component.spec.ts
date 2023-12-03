import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinduComponent } from './hindu.component';

describe('HinduComponent', () => {
  let component: HinduComponent;
  let fixture: ComponentFixture<HinduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HinduComponent]
    });
    fixture = TestBed.createComponent(HinduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
