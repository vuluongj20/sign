import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VisualsComponent } from './visuals/visuals.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { NewComponent } from './new/new.component';
import { VerifyComponent } from './verify/verify.component';
import { ErrorComponent } from './error/error.component';
import { ResetComponent } from './reset/reset.component';
import { DoneComponent } from './done/done.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualsComponent,
    LoginComponent,
    RecoverComponent,
    NewComponent,
    VerifyComponent,
    ErrorComponent,
    ResetComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
