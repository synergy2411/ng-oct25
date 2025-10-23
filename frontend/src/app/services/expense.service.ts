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

  create(newExpense: IExpense) {
    return this.httpClient.post<IExpense>(this.URL_ENDPOINT, newExpense, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  update(expenseId: string, expense: IExpense) {
    return this.httpClient.patch<IExpense>(
      this.URL_ENDPOINT + expenseId,
      expense,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  remove(expenseId: string) {
    return this.httpClient.delete(this.URL_ENDPOINT + expenseId);
  }
}
