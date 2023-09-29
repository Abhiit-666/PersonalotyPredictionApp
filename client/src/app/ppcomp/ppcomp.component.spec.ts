import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcompComponent } from './ppcomp.component';

describe('PpcompComponent', () => {
  let component: PpcompComponent;
  let fixture: ComponentFixture<PpcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PpcompComponent]
    });
    fixture = TestBed.createComponent(PpcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
