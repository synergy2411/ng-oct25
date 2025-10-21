import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  theForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.theForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        RegisterComponent.hasExclamationValidator,
      ]),
      cnfPassword: new FormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.theForm.controls['username'] as FormControl;
  }

  get password() {
    return this.theForm.controls['password'] as FormControl;
  }

  get cnfPassword() {
    return this.theForm.controls['cnfPassword'] as FormControl;
  }

  static hasExclamationValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { exclamation: true };
  }

  onSubmit() {
    console.log(this.theForm);
  }
}
