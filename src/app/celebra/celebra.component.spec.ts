import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebraComponent } from './celebra.component';

describe('CelebraComponent', () => {
  let component: CelebraComponent;
  let fixture: ComponentFixture<CelebraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CelebraComponent]
    });
    fixture = TestBed.createComponent(CelebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
