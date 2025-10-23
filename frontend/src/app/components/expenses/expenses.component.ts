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

  selectedExpense!: IExpense;

  isSelectedExpense = false;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService
      .fetchAll()
      .subscribe((expenses) => (this.allExpenses = expenses));
  }

  onAddNewExpense(expense: IExpense) {
    this.expenseService.create(expense).subscribe((createdExpense) => {
      this.allExpenses = [createdExpense, ...this.allExpenses];
      this.closeExpenseForm();
    });
  }

  closeExpenseForm() {
    this.showExpenseForm = false;
    this.isSelectedExpense = false;
  }

  onDeleteExpense(expenseId: string) {
    this.expenseService.remove(expenseId).subscribe(() => {
      const position = this.allExpenses.findIndex(
        (expense) => expense.id === expenseId
      );
      this.allExpenses.splice(position, 1);
    });
  }

  onEditExpense(expense: IExpense) {
    this.selectedExpense = expense;
    this.isSelectedExpense = true;
  }

  onUpdateExpense(expense: IExpense) {
    this.expenseService
      .update(this.selectedExpense.id, expense)
      .subscribe((updatedExpense) => {
        const position = this.allExpenses.findIndex(
          (expense) => expense.id === this.selectedExpense.id
        );
        this.allExpenses[position] = updatedExpense;
        this.isSelectedExpense = false;
      });
  }
}
