import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cele3Component } from './cele3.component';

describe('Cele3Component', () => {
  let component: Cele3Component;
  let fixture: ComponentFixture<Cele3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cele3Component]
    });
    fixture = TestBed.createComponent(Cele3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
