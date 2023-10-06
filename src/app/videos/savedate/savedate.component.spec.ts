import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedateComponent } from './savedate.component';

describe('SavedateComponent', () => {
  let component: SavedateComponent;
  let fixture: ComponentFixture<SavedateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedateComponent]
    });
    fixture = TestBed.createComponent(SavedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
