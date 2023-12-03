import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaternityComponent } from './maternity.component';

describe('MaternityComponent', () => {
  let component: MaternityComponent;
  let fixture: ComponentFixture<MaternityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaternityComponent]
    });
    fixture = TestBed.createComponent(MaternityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
