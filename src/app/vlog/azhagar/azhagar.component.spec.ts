import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzhagarComponent } from './azhagar.component';

describe('AzhagarComponent', () => {
  let component: AzhagarComponent;
  let fixture: ComponentFixture<AzhagarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzhagarComponent]
    });
    fixture = TestBed.createComponent(AzhagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
