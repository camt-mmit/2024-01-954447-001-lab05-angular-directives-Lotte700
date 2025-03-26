import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialThreeComponent } from './trial-three.component';

describe('TrialThreeComponent', () => {
  let component: TrialThreeComponent;
  let fixture: ComponentFixture<TrialThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
