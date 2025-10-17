import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { ViewEncapComponent } from './components/demo/view-encap/view-encap.component';
import { UserCommentComponent } from './components/users/user-comment/user-comment.component';

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
  ],
  imports: [
    // Modules: built-in / Custom
    BrowserModule,
    FormsModule,
  ],
  providers: [], // Service
  bootstrap: [AppComponent],
})
export class AppModule {}
