import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IExpense } from '../../../model/expense-model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  expenseForm!: FormGroup;

  @Output() expenseFormEvent = new EventEmitter<IExpense>();
  @Output() closeFormEvent = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      title: new FormControl(),
      amount: new FormControl(),
      createdAt: new FormControl(),
    });
  }

  onSubmit() {
    this.expenseFormEvent.emit(this.expenseForm.value);
  }

  onClose() {
    this.closeFormEvent.emit();
  }
}
