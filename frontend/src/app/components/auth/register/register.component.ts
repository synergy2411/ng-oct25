import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
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
    this.theForm = this.fb.group(
      {
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          RegisterComponent.hasExclamationValidator,
        ]),
        cnfPassword: new FormControl('', [
          Validators.required,
          // RegisterComponent.passwordMatchValidator,
        ]),
        hobbies: this.fb.array([]),
      },
      {
        validators: RegisterComponent.formGroupLevelPasswordMismatchValidator,
      }
    );
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

  get hobbies() {
    return this.theForm.get('hobbies') as FormArray;
  }

  addNewHobby() {
    this.hobbies.push(
      this.fb.group({
        name: new FormControl(),
        frequency: new FormControl(),
      })
    );
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  static hasExclamationValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { exclamation: true };
  }

  static passwordMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    if (!control.parent?.controls) {
      return null;
    }

    if (control.value === control.parent.get('password')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

  static formGroupLevelPasswordMismatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password');
    const cnfPassword = control.get('cnfPassword');

    if (!password || !cnfPassword) {
      return null;
    }

    if (password.value === cnfPassword.value) {
      cnfPassword.setErrors(null);
      return null;
    } else {
      cnfPassword.setErrors({ mismatch: true });
      return { mismatch: true };
    }
  }

  onSubmit() {
    console.log(this.theForm);
  }
}
