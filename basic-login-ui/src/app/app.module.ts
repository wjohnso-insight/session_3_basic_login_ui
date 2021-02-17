import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { CircleIconComponent } from './circle-icon/circle-icon.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CardHeaderComponent } from './card-header/card-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCardComponent,
    CircleIconComponent,
    LoginFormComponent,
    CardHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
