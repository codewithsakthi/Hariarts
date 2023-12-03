import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamakshiComponent } from './kamakshi.component';

describe('KamakshiComponent', () => {
  let component: KamakshiComponent;
  let fixture: ComponentFixture<KamakshiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KamakshiComponent]
    });
    fixture = TestBed.createComponent(KamakshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
