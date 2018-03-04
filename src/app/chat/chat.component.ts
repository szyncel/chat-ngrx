import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Message } from '../models/messages';
import { AppState, getMessages } from '../store/reducers/app.reducers';




@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages$: Observable<Message[]>

  constructor(
    private messageSerivce: MessageService,
    private store: Store<AppState>
  ) {
    this.messages$ = this.store.select(getMessages);
  }

}
