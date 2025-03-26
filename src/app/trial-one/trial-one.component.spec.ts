import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialOneComponent } from './trial-one.component';

describe('TrialOneComponent', () => {
  let component: TrialOneComponent;
  let fixture: ComponentFixture<TrialOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
