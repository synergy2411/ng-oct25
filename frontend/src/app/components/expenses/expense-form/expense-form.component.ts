import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IExpense } from '../../../model/expense-model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent implements OnInit {
  expenseForm!: FormGroup;

  @Input() expense!: IExpense;

  @Output() expenseFormEvent = new EventEmitter<IExpense>();
  @Output() closeFormEvent = new EventEmitter<void>();
  @Output() updateFormEvent = new EventEmitter<IExpense>();

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      title: new FormControl(),
      amount: new FormControl(),
      createdAt: new FormControl(),
    });
  }

  ngOnInit(): void {
    if (this.expense) {
      this.expenseForm.patchValue({
        ...this.expense,
      });
    }
  }

  onSubmit() {
    if (this.expense) {
      this.updateFormEvent.emit(this.expenseForm.value);
      return;
    }
    this.expenseFormEvent.emit(this.expenseForm.value);
  }

  onClose() {
    this.closeFormEvent.emit();
  }
}
