import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersServices } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
///  @Output() userSetToInactive = new EventEmitter<number>();

constructor(private usersServices: UsersServices) {}

  onSetToInactive(id: number) {
    this.usersServices.onSetToInactive(id);
  }
}
