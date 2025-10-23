import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { IExpense } from '../../model/expense-model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  allExpenses!: Array<IExpense>;

  showExpenseForm = false;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService
      .fetchAll()
      .subscribe((expenses) => (this.allExpenses = expenses));
  }
}
