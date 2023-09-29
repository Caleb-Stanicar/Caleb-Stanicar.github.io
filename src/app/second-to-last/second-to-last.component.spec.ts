import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondToLastComponent } from './second-to-last.component';

describe('SecondToLastComponent', () => {
  let component: SecondToLastComponent;
  let fixture: ComponentFixture<SecondToLastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondToLastComponent]
    });
    fixture = TestBed.createComponent(SecondToLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
