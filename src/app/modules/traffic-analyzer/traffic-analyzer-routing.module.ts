import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrafficAnalyzerComponent } from './traffic-analyzer.component';

const routes: Routes = [
  {
   path:'',component:TrafficAnalyzerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrafficAnalyzerRoutingModule { }
