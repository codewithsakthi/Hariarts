import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalagiComponent } from './balagi.component';

describe('BalagiComponent', () => {
  let component: BalagiComponent;
  let fixture: ComponentFixture<BalagiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalagiComponent]
    });
    fixture = TestBed.createComponent(BalagiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
