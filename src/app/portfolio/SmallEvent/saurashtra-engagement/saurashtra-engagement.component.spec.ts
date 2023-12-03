import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaurashtraEngagementComponent } from './saurashtra-engagement.component';

describe('SaurashtraEngagementComponent', () => {
  let component: SaurashtraEngagementComponent;
  let fixture: ComponentFixture<SaurashtraEngagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaurashtraEngagementComponent]
    });
    fixture = TestBed.createComponent(SaurashtraEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
