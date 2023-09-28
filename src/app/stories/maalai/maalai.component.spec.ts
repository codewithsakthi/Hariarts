import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaalaiComponent } from './maalai.component';

describe('MaalaiComponent', () => {
  let component: MaalaiComponent;
  let fixture: ComponentFixture<MaalaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaalaiComponent]
    });
    fixture = TestBed.createComponent(MaalaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
