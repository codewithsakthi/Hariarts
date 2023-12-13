import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrinivasaperumalComponent } from './srinivasaperumal.component';

describe('SrinivasaperumalComponent', () => {
  let component: SrinivasaperumalComponent;
  let fixture: ComponentFixture<SrinivasaperumalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrinivasaperumalComponent]
    });
    fixture = TestBed.createComponent(SrinivasaperumalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
