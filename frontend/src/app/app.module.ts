import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { ViewEncapComponent } from './components/demo/view-encap/view-encap.component';
import { UserCommentComponent } from './components/users/user-comment/user-comment.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { PipeDemoComponent } from './components/demo/pipe-demo/pipe-demo.component';
import { CoountryCodePipe } from './pipes/coountry-code.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CommentFormComponent } from './components/users/comment-form/comment-form.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DataService } from './services/data.service';
import { CompAComponent } from './components/demo/comp-a/comp-a.component';
import { CompBComponent } from './components/demo/comp-b/comp-b.component';
import { RxjsObservableComponent } from './components/demo/rxjs-observable/rxjs-observable.component';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './components/expenses/expenses.component';

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
  ],
  imports: [
    // Modules: built-in / Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DataService], // Service
  bootstrap: [AppComponent],
})
export class AppModule {}
