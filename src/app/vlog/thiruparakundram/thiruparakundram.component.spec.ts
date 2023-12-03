import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiruparakundramComponent } from './thiruparakundram.component';

describe('ThiruparakundramComponent', () => {
  let component: ThiruparakundramComponent;
  let fixture: ComponentFixture<ThiruparakundramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThiruparakundramComponent]
    });
    fixture = TestBed.createComponent(ThiruparakundramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
