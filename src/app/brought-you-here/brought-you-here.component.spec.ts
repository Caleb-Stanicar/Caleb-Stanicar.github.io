import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroughtYouHereComponent } from './brought-you-here.component';

describe('BroughtYouHereComponent', () => {
  let component: BroughtYouHereComponent;
  let fixture: ComponentFixture<BroughtYouHereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BroughtYouHereComponent]
    });
    fixture = TestBed.createComponent(BroughtYouHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
