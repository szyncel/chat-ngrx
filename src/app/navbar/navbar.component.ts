import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  template: `
  <mat-toolbar color="primary">
    <span class="title" routerLink="/">Chat-app</span>
    <button routerLink="chat" mat-button>Chat</button>
  </mat-toolbar>`,
  styles: [
    `button{
      position: absolute;
      right: 20px;
    }

    .title{
    cursor: pointer;
    }

    .title:hover{
    color: #000000;
    transition:  1s;
    }`
  ]
})
export class NavbarComponent {

  constructor() {}

}
