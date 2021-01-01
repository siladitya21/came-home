import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientsComponent } from './patients.component';


const routes: Routes = [
  {
    path: '', component: PatientsComponent
  },
  {
    path: 'new-patient', component: NewPatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
