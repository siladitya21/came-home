import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NurseManagerRoutingModule } from './nurse-manager-routing.module';
import { NurseComponent } from './nurse/nurse.component';


@NgModule({
  declarations: [NurseComponent],
  imports: [
    CommonModule,
    NurseManagerRoutingModule
  ]
})
export class NurseManagerModule { }
