import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IExpense } from '../../../model/expense-model';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrl: './expense-item.component.css',
})
export class ExpenseItemComponent {
  @Input() expense!: IExpense;

  @Output() expenseItemEvent = new EventEmitter<string>();

  @Output() editExpenseEvent = new EventEmitter<IExpense>();

  onDelete() {
    this.expenseItemEvent.emit(this.expense.id);
  }

  onEdit() {
    this.editExpenseEvent.emit(this.expense);
  }
}
