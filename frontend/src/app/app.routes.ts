import { Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { UsersComponent } from './components/users/users.component';
import { RxjsObservableComponent } from './components/demo/rxjs-observable/rxjs-observable.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200/
    component: RegisterComponent,
  },
  {
    path: 'expenses', // http://localhost:4200/expenses
    component: ExpensesComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'rxjs',
    component: RxjsObservableComponent,
  },
  {
    path: '**', // Does not match above specified path
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];
