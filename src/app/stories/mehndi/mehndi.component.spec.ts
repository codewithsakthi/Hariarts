import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MehndiComponent } from './mehndi.component';

describe('MehndiComponent', () => {
  let component: MehndiComponent;
  let fixture: ComponentFixture<MehndiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MehndiComponent]
    });
    fixture = TestBed.createComponent(MehndiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
