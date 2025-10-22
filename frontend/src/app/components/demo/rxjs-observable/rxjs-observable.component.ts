import { Component } from '@angular/core';
import {
  Observable,
  Subscription,
  filter,
  from,
  interval,
  map,
  range,
  take,
  tap,
} from 'rxjs';

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
    // setTimeout(() => observer.error(new Error('Something went wrong')), 4000);
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

  // INTERVAL
  inetrval$ = interval(1000);

  onIntervalSubs() {
    this.inetrval$
      .pipe(
        tap((val) => console.log('TAP : ', val)),
        filter((val) => val % 2 == 0),
        map((val) => val ** 2),
        take(5)
      )
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err),
        () => console.log('[COMPLETED]')
      );
  }

  // RANGE
  range$ = range(5);

  onRangeSubs() {
    this.range$.subscribe((data) => console.log('RANGE : ', data));
  }

  // FROM

  from$ = from(['Monica', 'Ross', 'Chandler', 'Joey', 'Rachel']);
  onFromSubs() {
    this.from$
      .pipe(
        filter((friend) => friend.startsWith('R')),
        map((friend) => 'My Best Friend : ' + friend)
      )
      .subscribe(console.log);
  }
}
