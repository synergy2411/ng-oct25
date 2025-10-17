import { Component, Input } from '@angular/core';
import { IUser } from '../../../model/user-model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  @Input() user!: IUser;

  myDynamicStyle = { color: 'grey', backgroundColor: 'white' };

  myDynamicClasses = { 'my-feature': false, 'my-border': true };

  onChangeStyle() {
    let tempColor = this.myDynamicStyle.color;
    this.myDynamicStyle.color = this.myDynamicStyle.backgroundColor;
    this.myDynamicStyle.backgroundColor = tempColor;
  }

  onChangeClasses() {
    this.myDynamicClasses['my-border'] = !this.myDynamicClasses['my-border'];
    this.myDynamicClasses['my-feature'] = !this.myDynamicClasses['my-feature'];
  }
}
