import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';

@Injectable()
export class DataService {
  constructor() {}

  getUserdata() {
    return USER_DATA;
  }
}

// Tree-shaking:
// DI Tree / Hierarchical Injector
