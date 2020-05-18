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
  newMes = 'Become a member now!';
  comMes = '';
  // Error code for error page
  resErr: number;
  // Message on success pages
  doneMes: any;
  // Input field errors, true makes the input field go red.
  newemailErr = false;
  newPassErr = false;
  newPass2Err = false;
  // Server responses
  newRes: any;
  // Views, true means that view is shown
  newPage = true;
  // Loader icon, true means icon is shown
  loading = false;
  // Forms
  newGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required],
    pass2: ['', Validators.required]
  });
  new($event) {
    if (this.newGroup.valid) {
      if (this.newGroup.get('pass').value === this.newGroup.get('pass2').value) {
        const button = $event.currentTarget,
          newMem = this.newGroup.value;
        button.classList.add('loading');
        this.loading = true;
        this.newPassErr = false;
        this.newPass2Err = false;
        this.dataService.post('new', newMem).subscribe(
          data => {
            this.newRes = data;
            button.classList.remove('loading');
            this.loading = false;
            if (this.newRes.userExists) {
              this.newMes = 'Account already exists.';
            } else {
              this.newPage = false;
              this.doneMes = ['You\'re all set. Check your inbox to verify your email.'];
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
        this.newMes = 'The passwords are not matching.';
      }
    } else {
      if (this.newGroup.get('email').errors) {
        if (this.newGroup.get('email').errors.required) {
          this.newMes = 'Forgetting something?';
          this.newemailErr = true;
        }
        if (this.newGroup.get('email').errors.email) {
          this.newMes = 'Oops… Invalid email address.';
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
