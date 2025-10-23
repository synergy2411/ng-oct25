import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private URL_ENDPOINT = 'http://localhost:3000/expenses/';

  constructor(private httpClient: HttpClient) {}

  fetchAll() {
    this.httpClient
      .get(this.URL_ENDPOINT)
      .subscribe((expenses) => console.log('RESPONSE : ', expenses));
  }

  create() {}

  update() {}

  remove() {}
}
