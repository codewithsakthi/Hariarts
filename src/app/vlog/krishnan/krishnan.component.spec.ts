import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrishnanComponent } from './krishnan.component';

describe('KrishnanComponent', () => {
  let component: KrishnanComponent;
  let fixture: ComponentFixture<KrishnanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KrishnanComponent]
    });
    fixture = TestBed.createComponent(KrishnanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
