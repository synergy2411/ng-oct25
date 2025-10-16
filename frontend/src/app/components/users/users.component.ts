import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  user = {
    firstName: 'bill',
    lastName: 'gates',
    dob: new Date('Dec 12, 1965'),
    income: 50000,
    isWorking: true,
    company: 'Microsoft',
    votes: 120,
    avatar: './assets/images/bill.jpeg',
  };

  onMoreInfo(person: any) {
    alert(`Mr. ${person.lastName} is working with ${person.company}!`);
  }

  onInput(event: any) {
    this.user.votes = event.target.value;
  }
}
