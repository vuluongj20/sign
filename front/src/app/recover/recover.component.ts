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
  mes: string = "We'll send you an email with a link to reset your password.";
  // Error code for error page
  resErr: number;
  // Message for done page
  doneMes: any;
  // Input field errors, true makes the input field go red.
  err: boolean = false;
  // Server responses
  res: any;
  // Views, true means that view is shown
  inputPage: boolean = true;
  // Loader icon, true means icon is shown
  loading: boolean = false;
  // Email form
  forgotEmail = this.fb.control('', [Validators.required, Validators.email]);
  sendEmail($event) {
    if (this.forgotEmail.valid) {
      var email = this.forgotEmail.value;
      var button = $event.currentTarget;
      button.classList.add('loading');
      this.loading = true;
      this.dataService.post('recover', {mail: email}).subscribe(
        data => {
          this.res = data;
          button.classList.remove('loading');
          this.loading = false;
          if (this.res.userExists) {
            this.inputPage = false;
            this.doneMes = ['Done! If you have an account with us, you should receive an email containing a link to reset your password.'];
          } else {
            this.mes = 'This is not a registered account.';
          }
        },
        err => {
          this.inputPage = false;
          this.resErr = err.status;
        }
      )
    } else {
      this.err = true;
      if (this.forgotEmail.errors.email) {
        this.mes = "Invalid email.";
      }
      if (this.forgotEmail.errors.required) {
        this.mes = 'Email required.';
      }
    }
  };
}
