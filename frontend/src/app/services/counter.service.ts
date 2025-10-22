import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  private counter = 0;

  constructor() {}

  increase() {
    this.counter += 1;
  }

  decrease() {
    this.counter -= 1;
  }

  getCounter() {
    return this.counter;
  }
}
