import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    // Component, Directive, Pipe
    AppComponent,
    UsersComponent,
  ],
  imports: [
    // Modules: built-in / Custom
    BrowserModule,
  ],
  providers: [], // Service
  bootstrap: [AppComponent],
})
export class AppModule {}
