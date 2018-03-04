import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Store } from '@ngrx/store';
import { State, getLoggedIn } from '../store/reducers/auth.reducers';
import { LogoutAction } from '../store/actions/auth.actions';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user$;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private store: Store<State>
  ) {
    this.user$ = this.store.select(getLoggedIn);
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '300px',
      width: '400px',
    });

    dialogRef.afterClosed();
  }

  logout() {
    this.store.dispatch(new LogoutAction());
    // this.authService.logout();
  }

}






