import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NalanguComponent } from './nalangu.component';

describe('NalanguComponent', () => {
  let component: NalanguComponent;
  let fixture: ComponentFixture<NalanguComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NalanguComponent]
    });
    fixture = TestBed.createComponent(NalanguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
