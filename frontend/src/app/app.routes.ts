import { Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { UsersComponent } from './components/users/users.component';
import { RxjsObservableComponent } from './components/demo/rxjs-observable/rxjs-observable.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { AddCourseComponent } from './components/courses/add-course/add-course.component';
import { CourseEditComponent } from './components/courses/course-edit/course-edit.component';
import { loginGuard } from './services/guards/login.guard';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200/
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth', // http://localhost:4200/auth
    component: RegisterComponent,
  },
  {
    path: 'expenses', // http://localhost:4200/expenses
    component: ExpensesComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'rxjs',
    component: RxjsObservableComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: 'add-course',
        component: AddCourseComponent,
      },
      {
        path: ':courseId', // Route Parameter (:) // http://localhost:4200/courses/xyz
        component: CourseDetailsComponent,
      },
      {
        path: ':courseId/edit',
        component: CourseEditComponent,
      },
    ],
  },
  {
    path: '**', // Does not match above specified path
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];
