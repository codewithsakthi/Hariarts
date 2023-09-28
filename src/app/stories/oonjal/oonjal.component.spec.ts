import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OonjalComponent } from './oonjal.component';

describe('OonjalComponent', () => {
  let component: OonjalComponent;
  let fixture: ComponentFixture<OonjalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OonjalComponent]
    });
    fixture = TestBed.createComponent(OonjalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
