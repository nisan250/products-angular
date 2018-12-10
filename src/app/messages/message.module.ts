import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
    imports: [
        SharedModule,
        MessagesRoutingModule
    ],
    declarations: [
        MessageComponent
    ],
    providers: [
        MessageService
    ]
})
export class MessageModule { }
