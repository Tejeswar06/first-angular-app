import {Component, Input} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  onSelectUser(){}

  @Input() avatar!: string ;
  @Input() name!: string;

   get ImagePath()
   {
     return './assets/users/' + this.avatar;
  }
}
