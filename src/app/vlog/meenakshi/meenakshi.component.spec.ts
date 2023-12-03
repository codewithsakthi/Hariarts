import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeenakshiComponent } from './meenakshi.component';

describe('MeenakshiComponent', () => {
  let component: MeenakshiComponent;
  let fixture: ComponentFixture<MeenakshiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeenakshiComponent]
    });
    fixture = TestBed.createComponent(MeenakshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
