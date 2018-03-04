import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Store } from '@ngrx/store';


import { Observable } from 'rxjs/Observable';
import { Message } from '../models/messages';
import { UpdateFormAction, AddMessageAction } from '../store/actions/message.actions';
import { AppState, getFormValue } from '../store/reducers/app.reducers';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent {
  formValue;

  constructor(private messageSerivce: MessageService,
    private store: Store<AppState>) {
    this.store.select(getFormValue).subscribe(res => this.formValue = res);
  }

  updateState() {
    this.store.dispatch(new UpdateFormAction(this.formValue));
  }

  send(f) {
    console.log(f.value);
    this.store.dispatch(new AddMessageAction(f.value));
    f.reset();
  }



}
