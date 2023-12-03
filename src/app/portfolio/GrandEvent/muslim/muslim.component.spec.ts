import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuslimComponent } from './muslim.component';

describe('MuslimComponent', () => {
  let component: MuslimComponent;
  let fixture: ComponentFixture<MuslimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuslimComponent]
    });
    fixture = TestBed.createComponent(MuslimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
