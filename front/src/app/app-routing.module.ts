import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DoneComponent } from './done/done.component';
import { RecoverComponent } from './recover/recover.component';
import { ActivateComponent } from './activate/activate.component';
import { NewComponent } from './new/new.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  { path: 'activate/:rand', component: ActivateComponent, data: {animation: 'activate'} },
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
