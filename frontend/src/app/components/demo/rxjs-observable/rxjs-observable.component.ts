import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
  filter,
  from,
  interval,
  map,
  range,
  take,
  takeUntil,
  takeWhile,
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
        // takeWhile((val) => val < 100)
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

  // SUBJECTS: are both observer (next, error, complete) as well as observable(pipe, subscribe)
  // - Multi-casted

  onSubjectSubs() {
    // let subject = new Subject();
    // let subject = new BehaviorSubject(101); // seed value
    // let subject = new ReplaySubject(3); // replays last n number of emission
    let subject = new AsyncSubject(); // last emitted value upon completion

    subject.next(99);
    subject.next(102);

    subject.subscribe((data) => console.log('Subs 1: ', data));

    subject.next(103);

    subject.subscribe((data) => console.log('Subs 2: ', data));

    subject.next(104);

    subject.subscribe((data) => console.log('Subs 3: ', data));

    subject.next(105);

    subject.complete();
  }
}

// Subs 1 - 99, 102, 103, 104, 105

// Subs 2 - 99, 102, 103, 104, 105

// Subs 3 - 102, 103, 104, 105
