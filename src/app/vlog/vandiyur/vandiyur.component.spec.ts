import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VandiyurComponent } from './vandiyur.component';

describe('VandiyurComponent', () => {
  let component: VandiyurComponent;
  let fixture: ComponentFixture<VandiyurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VandiyurComponent]
    });
    fixture = TestBed.createComponent(VandiyurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
