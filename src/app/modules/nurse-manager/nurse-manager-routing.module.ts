import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NurseManagerComponent } from './nurse-manager.component';
import { NurseComponent } from './nurse/nurse.component';

const routes: Routes = [
  {
    path:'',
    component:NurseManagerComponent
  },
  {
    path:'nurse',component:NurseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NurseManagerRoutingModule { }
