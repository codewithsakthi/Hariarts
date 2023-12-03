import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristianComponent } from './christian.component';

describe('ChristianComponent', () => {
  let component: ChristianComponent;
  let fixture: ComponentFixture<ChristianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChristianComponent]
    });
    fixture = TestBed.createComponent(ChristianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
