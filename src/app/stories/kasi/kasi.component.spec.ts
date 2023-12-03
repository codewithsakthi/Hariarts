import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasiComponent } from './kasi.component';

describe('KasiComponent', () => {
  let component: KasiComponent;
  let fixture: ComponentFixture<KasiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KasiComponent]
    });
    fixture = TestBed.createComponent(KasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
