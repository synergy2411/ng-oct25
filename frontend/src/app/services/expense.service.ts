import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpense } from '../model/expense-model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private URL_ENDPOINT = 'http://localhost:3000/expenses/';

  constructor(private httpClient: HttpClient) {}

  fetchAll() {
    return this.httpClient.get<Array<IExpense>>(this.URL_ENDPOINT);
  }

  create() {}

  update() {}

  remove() {}
}
