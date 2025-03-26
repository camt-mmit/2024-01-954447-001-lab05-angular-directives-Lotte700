import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialTwoComponent } from './trial-two.component';

describe('TrialTwoComponent', () => {
  let component: TrialTwoComponent;
  let fixture: ComponentFixture<TrialTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
