import {Component, EventEmitter, Input, Output, output} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users'
import {OutletContext} from '@angular/router';
import {UserInterface} from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  onSelectUser(){
    this.select.emit(this.user.id);
  }

  @Input({required: true}) user!: UserInterface;
  @Input ({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get ImagePath()
  {
    return './assets/users/' + this.user.avatar;
  }
}
