import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenkatachalapathiComponent } from './venkatachalapathi.component';

describe('VenkatachalapathiComponent', () => {
  let component: VenkatachalapathiComponent;
  let fixture: ComponentFixture<VenkatachalapathiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenkatachalapathiComponent]
    });
    fixture = TestBed.createComponent(VenkatachalapathiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
