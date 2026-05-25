import {Component, computed, input, Input} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  onSelectUser(){}

  // @Input({required: true}) avatar!: string ;
  // @Input({required: true}) name!: string;
  avatar = input.required<string>();
  name = input.required<string>();

  ImagePath = computed(() => {
    return './assets/users/' + this.avatar();
  })

  //  get ImagePath()
  //  {
  //    return './assets/users/' + this.avatar;
  // }
}
