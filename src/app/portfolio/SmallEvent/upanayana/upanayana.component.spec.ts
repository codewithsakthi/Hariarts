import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpanayanaComponent } from './upanayana.component';

describe('UpanayanaComponent', () => {
  let component: UpanayanaComponent;
  let fixture: ComponentFixture<UpanayanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpanayanaComponent]
    });
    fixture = TestBed.createComponent(UpanayanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
