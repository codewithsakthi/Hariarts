import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cele2Component } from './cele2.component';

describe('Cele2Component', () => {
  let component: Cele2Component;
  let fixture: ComponentFixture<Cele2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cele2Component]
    });
    fixture = TestBed.createComponent(Cele2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
