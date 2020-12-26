import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'nurse-manager',
    loadChildren: () => import('./modules/nurse-manager/nurse-manager.module').then(m => m.NurseManagerModule)
  },
  {
    path: 'patients',
    loadChildren: () => import('./modules/patients/patients.module').then(m => m.PatientsModule)
  },
  {
    path: 'traffic-analyzer',
    loadChildren: () => import('./modules/traffic-analyzer/traffic-analyzer.module').then(m => m.TrafficAnalyzerModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('./modules/calender/calender.module').then(m => m.CalenderModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./modules/messages/messages.module').then(m => m.MessagesModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
