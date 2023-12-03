import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaurashtraComponent } from './saurashtra.component';

describe('SaurashtraComponent', () => {
  let component: SaurashtraComponent;
  let fixture: ComponentFixture<SaurashtraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaurashtraComponent]
    });
    fixture = TestBed.createComponent(SaurashtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
