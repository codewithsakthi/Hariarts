import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavaratriComponent } from './navaratri.component';

describe('NavaratriComponent', () => {
  let component: NavaratriComponent;
  let fixture: ComponentFixture<NavaratriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavaratriComponent]
    });
    fixture = TestBed.createComponent(NavaratriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
