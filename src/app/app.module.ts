import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducer } from './store/reducers/app.reducers';
import { authReducer } from './store/reducers/auth.reducers';


import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { MessageService } from './message.service';
import { DialogComponent } from './dialog/dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomeComponent,
    DialogComponent,
    NavbarComponent,
    AddMessageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      message: reducer,
      auth: authReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [MessageService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
