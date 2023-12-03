import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaniswarComponent } from './saniswar.component';

describe('SaniswarComponent', () => {
  let component: SaniswarComponent;
  let fixture: ComponentFixture<SaniswarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaniswarComponent]
    });
    fixture = TestBed.createComponent(SaniswarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
