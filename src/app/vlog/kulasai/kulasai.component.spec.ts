import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KulasaiComponent } from './kulasai.component';

describe('KulasaiComponent', () => {
  let component: KulasaiComponent;
  let fixture: ComponentFixture<KulasaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KulasaiComponent]
    });
    fixture = TestBed.createComponent(KulasaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
