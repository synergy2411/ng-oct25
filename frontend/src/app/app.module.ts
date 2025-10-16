import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';

@NgModule({
  declarations: [
    // Component, Directive, Pipe
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
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
