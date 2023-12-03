import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfSareeComponent } from './half-saree.component';

describe('HalfSareeComponent', () => {
  let component: HalfSareeComponent;
  let fixture: ComponentFixture<HalfSareeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HalfSareeComponent]
    });
    fixture = TestBed.createComponent(HalfSareeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
