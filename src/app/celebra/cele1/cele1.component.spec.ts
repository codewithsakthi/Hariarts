import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cele1Component } from './cele1.component';

describe('Cele1Component', () => {
  let component: Cele1Component;
  let fixture: ComponentFixture<Cele1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cele1Component]
    });
    fixture = TestBed.createComponent(Cele1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
