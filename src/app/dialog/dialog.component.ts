import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers/auth.reducers';
import {LoginAction, LoginFailureAction } from '../store/actions/auth.actions';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    private authService: AuthService,
    private store: Store<State>
  ) { }

  submit(form) {
    let isLogin=this.authService.login(form.value);
    if(isLogin){
      this.store.dispatch(new LoginAction(form.value));
      this.dialogRef.close(form);
    }else{
      console.log('Niepoprawne dane');
    } 
  }



}
