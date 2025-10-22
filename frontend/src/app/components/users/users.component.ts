import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IUser } from '../../model/user-model';
import { USER_DATA } from '../../model/mocks';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class UsersComponent implements OnInit {
  users!: Array<IUser>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.users = this.dataService.getUserdata();
  }

  onMoreInfo(person: IUser) {
    alert(`Mr. ${person.lastName} is working with ${person.company}!`);
  }

  onInput(event: any) {
    // this.user.votes = event.target.value;
  }
}
