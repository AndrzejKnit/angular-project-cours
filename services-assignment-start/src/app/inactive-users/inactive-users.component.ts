import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersServices } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
 // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersServices) { }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
