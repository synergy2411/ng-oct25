import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../../model/user-model';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrl: './user-image.component.css',
})
export class UserImageComponent {
  @Input() user!: IUser;

  @Output() childEvent = new EventEmitter<IUser>();

  onBtnClick() {
    this.childEvent.emit(this.user);
  }
}
