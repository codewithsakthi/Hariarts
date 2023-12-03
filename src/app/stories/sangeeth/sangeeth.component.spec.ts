import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangeethComponent } from './sangeeth.component';

describe('SangeethComponent', () => {
  let component: SangeethComponent;
  let fixture: ComponentFixture<SangeethComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SangeethComponent]
    });
    fixture = TestBed.createComponent(SangeethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
