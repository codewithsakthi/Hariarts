import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhurtComponent } from './muhurt.component';

describe('MuhurtComponent', () => {
  let component: MuhurtComponent;
  let fixture: ComponentFixture<MuhurtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuhurtComponent]
    });
    fixture = TestBed.createComponent(MuhurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
