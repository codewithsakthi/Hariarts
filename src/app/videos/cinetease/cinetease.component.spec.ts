import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineteaseComponent } from './cinetease.component';

describe('CineteaseComponent', () => {
  let component: CineteaseComponent;
  let fixture: ComponentFixture<CineteaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CineteaseComponent]
    });
    fixture = TestBed.createComponent(CineteaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
