import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { ActivateComponent } from './activate/activate.component';
import { NewComponent } from './new/new.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  { path: 'activate/:rand', component: ActivateComponent },
  { path: 'new', component: NewComponent },
  { path: 'reset/:rand', component: ResetComponent },
  { path: 'recover', component: RecoverComponent},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
