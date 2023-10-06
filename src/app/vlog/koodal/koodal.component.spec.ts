import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoodalComponent } from './koodal.component';

describe('KoodalComponent', () => {
  let component: KoodalComponent;
  let fixture: ComponentFixture<KoodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KoodalComponent]
    });
    fixture = TestBed.createComponent(KoodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
