import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradhighComponent } from './tradhigh.component';

describe('TradhighComponent', () => {
  let component: TradhighComponent;
  let fixture: ComponentFixture<TradhighComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradhighComponent]
    });
    fixture = TestBed.createComponent(TradhighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
