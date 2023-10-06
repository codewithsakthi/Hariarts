import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorytellingComponent } from './storytelling.component';

describe('StorytellingComponent', () => {
  let component: StorytellingComponent;
  let fixture: ComponentFixture<StorytellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorytellingComponent]
    });
    fixture = TestBed.createComponent(StorytellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
