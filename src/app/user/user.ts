import {Component, EventEmitter, Input, Output, output} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users'
import {OutletContext} from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  onSelectUser(){
    this.select.emit(this.id);
  }

  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string ;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter();

   get ImagePath()
   {
     return './assets/users/' + this.avatar;
  }
}
