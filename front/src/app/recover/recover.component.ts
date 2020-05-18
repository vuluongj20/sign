import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent {

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  // Text at the top
  mes = 'We\'ll send you an email with a link to reset your password.';
  // Error code for error page
  resErr: number;
  // Message for done page
  doneMes: any;
  // Input field errors, true makes the input field go red.
  err = false;
  // Server responses
  res: any;
  // Views, true means that view is shown
  inputPage = true;
  // Loader icon, true means icon is shown
  loading = false;
  // Email form
  forgotEmail = this.fb.control('', [Validators.required, Validators.email]);
  sendEmail($event) {
    if (this.forgotEmail.valid) {
      const email = this.forgotEmail.value,
      button = $event.currentTarget;
      button.classList.add('loading');
      this.loading = true;
      this.dataService.post('recover', {mail: email}).subscribe(
        data => {
          this.res = data;
          button.classList.remove('loading');
          this.loading = false;
          if (this.res.userExists) {
            this.inputPage = false;
            this.doneMes = ['Done! We sent you an email with a link to reset your password.'];
          } else {
            this.err = true;
            this.mes = 'Oops! We couldn\'t find an account associated with this email.';
          }
        },
        err => {
          this.inputPage = false;
          this.resErr = err.status;
        }
      );
    } else {
      this.err = true;
      if (this.forgotEmail.errors.email) {
        this.mes = 'Invalid email. Make sure you typed in your full email address.';
      }
      if (this.forgotEmail.errors.required) {
        this.mes = 'We need your email address to send you a password reset link.';
      }
    }
  }
}
