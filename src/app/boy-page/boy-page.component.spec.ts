import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyPageComponent } from './boy-page.component';

describe('BoyPageComponent', () => {
  let component: BoyPageComponent;
  let fixture: ComponentFixture<BoyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoyPageComponent]
    });
    fixture = TestBed.createComponent(BoyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
