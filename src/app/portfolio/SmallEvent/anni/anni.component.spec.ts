import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnniComponent } from './anni.component';

describe('AnniComponent', () => {
  let component: AnniComponent;
  let fixture: ComponentFixture<AnniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnniComponent]
    });
    fixture = TestBed.createComponent(AnniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
