import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getBasicData() {
    return ['Monica', 'Ross', 'Joey', 'Rachel'];
  }

  getPromiseData(): Promise<{ message: string }> {
    return new Promise((resolve, reject) => {
      resolve({ message: 'success' });
    });
  }

  getObserableData(): Observable<string> {
    return of('Run 5 miles today');
  }
}
