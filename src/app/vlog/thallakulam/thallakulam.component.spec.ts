import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThallakulamComponent } from './thallakulam.component';

describe('ThallakulamComponent', () => {
  let component: ThallakulamComponent;
  let fixture: ComponentFixture<ThallakulamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThallakulamComponent]
    });
    fixture = TestBed.createComponent(ThallakulamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
