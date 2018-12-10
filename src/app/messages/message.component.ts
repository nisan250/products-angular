import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../messages/message.service';

@Component({
    template: `
    <div class="card animatedroute">
      <div class="d-flex card-header">
        <h5 class="flex-fill">Message Log</h5>
        <span class="">
            <a class="btn btn-default btn-sm"
                (click)="close()">
                x
            </a>
        </span>
      </div>
      <div class="card-body" >
        <div class="message-elm" *ngFor="let message of messageService.messages; let i=index">
          <div *ngIf="i<10" class="message-row">
            {{ message }}
          </div>
        </div>
        <div *ngIf="messageService.messages.length < 1" class="message-row">
          <div>No messages yet.</div>
          <div>Log-In to see new message.</div>
      </div>
      </div>
    </div>

    `,
    styles: [
        '.message-row { margin-bottom: 10px }',
        '.btn-default { border: 1px solid #ccc; }',
        '.message-row { border-bottom: 1px solid rgba(223,215,202,0.75) }',
        '.message-row:last-child { border-bottom: none }'
    ]
})





export class MessageComponent {

    constructor(private messageService: MessageService,
                private router: Router) { }

    close(): void {
      this.router.navigate([{ outlets: { popup: null }}]);
      this.messageService.isDisplayed = false;
    }
}
