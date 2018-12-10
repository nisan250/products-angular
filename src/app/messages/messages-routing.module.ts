

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageComponent } from './message.component';
import { MessageService } from './message.service';

const routes: Routes = [
 { path: 'messages', component: MessageComponent, outlet: 'popup' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes,
  )],
  exports: [
    RouterModule
  ]
})
export class MessagesRoutingModule { }
