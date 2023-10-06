import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogComponent } from './vlog.component';

describe('VlogComponent', () => {
  let component: VlogComponent;
  let fixture: ComponentFixture<VlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VlogComponent]
    });
    fixture = TestBed.createComponent(VlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
