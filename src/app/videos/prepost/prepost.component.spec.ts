import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepostComponent } from './prepost.component';

describe('PrepostComponent', () => {
  let component: PrepostComponent;
  let fixture: ComponentFixture<PrepostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrepostComponent]
    });
    fixture = TestBed.createComponent(PrepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
