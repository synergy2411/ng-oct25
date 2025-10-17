import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css',
})
export class PipeDemoComponent {
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
}
