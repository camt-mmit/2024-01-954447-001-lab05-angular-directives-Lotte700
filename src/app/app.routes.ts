import { Routes } from '@angular/router';
import { ExampleOneComponent } from './example-one/example-one.component';
import { TrialOneComponent } from './trial-one/trial-one.component';
import { TrialTwoComponent } from './trial-two/trial-two.component';
import { TrialThreeComponent } from './trial-three/trial-three.component';
import { LabComponent } from './lab/lab.component';

export const routes: Routes = [
  { path: '', redirectTo: 'example-one', pathMatch: 'full'},
  { path: 'example-one',component: ExampleOneComponent},
  { path: 'trial-one',component: TrialOneComponent},
  { path: 'trial-two',component: TrialTwoComponent},
  { path: 'trial-three',component: TrialThreeComponent},
  { path: 'lab',component: LabComponent},
];
