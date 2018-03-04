import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: any[] = [];

  constructor() { }


  addMessage(msg) {
    this.messages.push(msg);
  }

  getAllMessages() {
    return this.messages;
  }

  clear(){
    
  }

}
