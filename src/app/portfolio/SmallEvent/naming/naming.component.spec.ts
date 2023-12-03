import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamingComponent } from './naming.component';

describe('NamingComponent', () => {
  let component: NamingComponent;
  let fixture: ComponentFixture<NamingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NamingComponent]
    });
    fixture = TestBed.createComponent(NamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
