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

  onDelete() {
    this.expenseItemEvent.emit(this.expense.id);
  }
}
