import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  // Text at the top
  newMes: string = 'Become a member now.';
  comMes: string = '';
  // Error code for error page
  resErr: number;
  // Message on success pages
  doneMes: any;
  // Input field errors, true makes the input field go red.
  newemailErr: boolean = false;
  newPassErr: boolean = false;
  newPass2Err: boolean = false;
  // Server responses
  newRes: any;
  // Views, true means that view is shown
  newPage: boolean = true;
  // Loader icon, true means icon is shown
  loading: boolean = false;
  // Forms
  newGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required],
    pass2: ['', Validators.required]
  });
  new($event) {
    if (this.newGroup.valid) {
      if (this.newGroup.get('pass').value === this.newGroup.get('pass2').value) {
        var button = $event.currentTarget;
        button.classList.add('loading');
        this.loading = true;
        this.newPassErr = false;
        this.newPass2Err = false;
        var newMem = this.newGroup.value;
        this.dataService.post('new', newMem).subscribe(
          data => {
            this.newRes = data;
            button.classList.remove('loading');
            this.loading = false;
            if (this.newRes.userExists) {
              this.newMes = 'Account already exists.';
            } else {
              this.newPage = false;
              this.doneMes = ["You're all set. Check your inbox to verify your email.", 'Sign in now.'];
            }
          },
          err => {
            this.newPage = false;
            this.resErr = err.status;
          }
        );
      } else {
        this.newPassErr = true;
        this.newPass2Err = true;
        this.newMes = "Reconfirm your password.";
      }
    } else {
      if (this.newGroup.get('email').errors) {
        if (this.newGroup.get('email').errors.required) {
          this.newMes = 'Forgetting something?';
          this.newemailErr = true;
        }
        if (this.newGroup.get('email').errors.email) {
          this.newMes = 'Invalid email.';
          this.newemailErr = true;
        }
      } else {
        this.newemailErr = false;
      }
      if (this.newGroup.get('pass').errors) {
        this.newMes = 'Forgetting something?';
        this.newPassErr = true;
      } else {
        this.newPassErr = false;
      }
      if (this.newGroup.get('pass2').errors) {
        this.newMes = 'Forgetting something?';
        this.newPass2Err = true;
      } else {
        this.newPass2Err = false;
      }
    }
  }
}
