import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  // Message on top
  mes: string = 'Welcome to Sign!';
  // Input field errors, true makes the input field go red.
  emailErr: boolean = false;
  emailErr2: boolean = false;
  passErr: boolean = false;
  // Response from the server
  res: any;
  // Error code for error page
  resErr: number;
  // Views, true means that view is shown
  loginPage: boolean = true;
  // Loader icon, true means icon is shown
  loading: boolean = false;
  // Login form
  userGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required]
  });
  login($event) {
    if (this.userGroup.valid) {
      console.log('hey')
      var user = this.userGroup.value;
      var button = $event.currentTarget;
      button.classList.add('loading');
      this.loading = true;
      this.dataService.post('login', user).subscribe(
        data => {
          this.res = data;
          if (!this.res.authorized) {
            button.classList.remove('loading');
            this.loading = false;
            this.mes = 'Oops... wrong email/password.';
            this.emailErr = true;
            this.passErr = true;
          } else {
            if (this.res.active) {
              document.location.assign('/');
            } else {
              this.mes = 'This account is not activated. Check your mailbox and activate it now.';
              button.classList.remove('loading');
              this.loading = false;
              this.emailErr = true;
              this.passErr = true;
            }
          }
        },
        err => {
          this.loginPage = false;
          this.resErr = err.status;
        }
      );
    } else {
      if (this.userGroup.get('email').errors) {
        if (this.userGroup.get('email').errors.required) {
          this.mes = 'Forgetting something?';
          this.emailErr = true;
        }
        if (this.userGroup.get('email').errors.email) {
          this.mes = 'Invalid email.';
          this.emailErr2 = true;
        }
      } else {
        this.emailErr = false;
        this.emailErr2 = false;
      }
      if (this.userGroup.get('pass').errors) {
        this.mes = 'Forgetting something?';
        this.passErr = true;
      } else {
        this.passErr = false;
      }
    }
  }
}
