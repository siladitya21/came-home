import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { DemoMaterialModule } from '../../shared/material-module';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewPatientComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    DemoMaterialModule,
    RouterModule
  ],
  exports:[DemoMaterialModule]
})
export class PatientsModule { }
