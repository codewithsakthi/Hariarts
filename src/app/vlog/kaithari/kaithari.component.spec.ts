import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaithariComponent } from './kaithari.component';

describe('KaithariComponent', () => {
  let component: KaithariComponent;
  let fixture: ComponentFixture<KaithariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaithariComponent]
    });
    fixture = TestBed.createComponent(KaithariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
