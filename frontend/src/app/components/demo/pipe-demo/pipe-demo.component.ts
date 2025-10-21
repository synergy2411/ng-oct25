import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css',
})
export class PipeDemoComponent {
  contactNumber = 9876543210;

  username = 'john doe';

  theNumber = 123456.789;

  dob = new Date('Dec 21, 1967');

  todo = {
    id: 't001',
    label: 'SHopping',
    status: 'pending',
  };

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This string is delivered asynchronously');
    }, 2000);
  });

  todoCollection = [
    { label: 'shopping', status: 'pending' },
    { label: 'planting', status: 'completed' },
    { label: 'insurance', status: 'pending' },
    { label: 'grocery', status: 'completed' },
  ];

  filteredStatus = '';

  onAddTodo() {
    // Impure Change
    this.todoCollection.push({ label: 'New Todo', status: 'pending' });

    // Pure Change
    // this.todoCollection = [
    //   { label: 'New Item', status: 'pending' },
    //   ...this.todoCollection,
    // ];
  }
}
