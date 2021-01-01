import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message/new-message.component';

const routes: Routes = [
  {
    path:'',component:MessagesComponent
  },
  {
    path:'new-message',component:NewMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
