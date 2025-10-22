import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-observable',
  templateUrl: './rxjs-observable.component.html',
  styleUrl: './rxjs-observable.component.css',
})
export class RxjsObservableComponent {
  obs$ = new Observable((observer) => {
    setTimeout(() => observer.next(101), 1000);
    setTimeout(() => observer.next(102), 1500);
    setTimeout(() => observer.next(103), 3000);
    setTimeout(() => observer.error(new Error('Something went wrong')), 4000);
    setTimeout(() => observer.next(104), 5000);
    setTimeout(() => {
      observer.complete();
    }, 6000);
  });

  unSub$!: Subscription;

  onSubscribe() {
    this.unSub$ = this.obs$.subscribe({
      next: (data) => {
        console.log('Data : ', data);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('[COMPLETED]');
      },
    });
  }

  onUnsubscribe() {
    this.unSub$.unsubscribe();
  }
}
