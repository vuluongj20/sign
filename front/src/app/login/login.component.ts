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
  mes = 'Welcome to Sign!';
  // Input field errors, true makes the input field go red.
  emailErr = false;
  emailErr2 = false;
  passErr = false;
  // Response from the server
  res: any;
  // Error code for error page
  resErr: number;
  // Views, true means that view is shown
  loginPage = true;
  // Loader icon, true means icon is shown
  loading = false;
  // Login form
  userGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required]
  });
  login($event) {
    if (this.userGroup.valid) {
      const user = this.userGroup.value,
      button = $event.currentTarget;
      button.classList.add('loading');
      this.loading = true;
      this.dataService.post('login', user).subscribe(
        data => {
          this.res = data;
          if (!this.res.userFound) {
            button.classList.remove('loading');
            this.loading = false;
            this.mes = 'Email address not found.';
            this.passErr = false;
            this.emailErr = true;
          } else {
            if (!this.res.authorized) {
              button.classList.remove('loading');
              this.loading = false;
              this.mes = 'Wrong password :(';
              this.emailErr = false;
              this.passErr = true;
            } else {
              if (this.res.verified) {
                document.location.assign('/home/');
              } else {
                this.mes = 'Email address not yet verified. Check your mailbox and verify it now.';
                button.classList.remove('loading');
                this.loading = false;
                this.emailErr = true;
                this.passErr = false;
              }
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
