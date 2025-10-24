import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CompAComponent } from './components/demo/comp-a/comp-a.component';
import { CompBComponent } from './components/demo/comp-b/comp-b.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { PipeDemoComponent } from './components/demo/pipe-demo/pipe-demo.component';
import { RxjsObservableComponent } from './components/demo/rxjs-observable/rxjs-observable.component';
import { ViewEncapComponent } from './components/demo/view-encap/view-encap.component';
import { ExpenseFormComponent } from './components/expenses/expense-form/expense-form.component';
import { ExpenseItemComponent } from './components/expenses/expense-item/expense-item.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CommentFormComponent } from './components/users/comment-form/comment-form.component';
import { UserCommentComponent } from './components/users/user-comment/user-comment.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { CoountryCodePipe } from './pipes/coountry-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { DataService } from './services/data.service';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { LoggerInterceptor } from './services/interceptors/logger.interceptor';
import { IncomingResponseInterceptor } from './services/interceptors/outgoing-response.interceptor';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { APP_ROUTES } from './app.routes';
import { MainNavigationComponent } from './components/layout/main-navigation/main-navigation.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCourseComponent } from './components/courses/add-course/add-course.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { CourseEditComponent } from './components/courses/course-edit/course-edit.component';

@NgModule({
  declarations: [
    // Component, Directive, Pipe
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
    LifeCycleComponent,
    ViewEncapComponent,
    UserCommentComponent,
    BetterHighlightDirective,
    PipeDemoComponent,
    CoountryCodePipe,
    ReversePipe,
    FilterPipe,
    CommentFormComponent,
    RegisterComponent,
    CompAComponent,
    CompBComponent,
    RxjsObservableComponent,
    ExpensesComponent,
    ExpenseItemComponent,
    ExpenseFormComponent,
    PageNotFoundComponent,
    MainNavigationComponent,
    CoursesComponent,
    AddCourseComponent,
    CourseDetailsComponent,
    CourseEditComponent,
  ],
  imports: [
    // Modules: built-in / Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IncomingResponseInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
  ], // Service
  bootstrap: [AppComponent],
})
export class AppModule {}
