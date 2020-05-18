import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { VerifyComponent } from './verify/verify.component';
import { NewComponent } from './new/new.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  { path: 'verify/:rand', component: VerifyComponent, data: {animation: 'verify'} },
  { path: 'new', component: NewComponent, data: {animation: 'new'} },
  { path: 'reset/:rand', component: ResetComponent, data: {animation: 'reset'} },
  { path: 'recover', component: RecoverComponent, data: {animation: 'recover'}},
  { path: '', component: LoginComponent, data: {animation: 'home'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
