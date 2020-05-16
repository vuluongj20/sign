import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
})
export class ResetComponent {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private fb: FormBuilder
  ) { }

  // Text on top
  resetMes: string = "Enter the new password here.";
  // Error code for error page
  resErr: number;
  // Message on success pages
  doneMes: any;
  // Input field errors, true makes the input field go red.
  newPassErr: boolean = false;
  newPass2Err: boolean = false;
  // Response from server
  resetRes: any;
  initRes: any;
  resendRes: any;
  // Views, true means that view is shown
  resetPage: boolean = true;
  invalidPage: boolean = false;
  expiredPage: boolean = false;
  // Loader icon, true means icon is shown
  loading: boolean = false;
  // New password form
  resetGroup = this.fb.group({
    newPass: ['', Validators.required],
    newPass2: ['', Validators.required]
  });
  // Functions
  resendLink() {
    this.route.params.subscribe(params => {
      var rand = params.rand;
      this.dataService.post('resend', {type: 'reset', rand: rand}).subscribe(
        () => {
          this.expiredPage = false;
          this.doneMes = ['Sent! Check your mailbox'];
        },
        err => {
          this.expiredPage = false;
          this.resErr = err.status;
        }
      )
    })
  }
  reset($event) {
    if (this.resetGroup.valid) {
      if (this.resetGroup.get('newPass').value === this.resetGroup.get('newPass2').value) {
        this.route.params.subscribe(params => {
          var rand = params.rand;
          var newPass = this.resetGroup.get('newPass').value;
          var button = $event.currentTarget;
          button.classList.add('loading');
          this.loading = true;
          this.dataService.post('reset', {rand: rand, newPass: newPass}).subscribe(
            data => {
              this.resetRes = data;
              button.classList.remove('loading');
              this.loading = false;
              if (this.resetRes.userFound) {
                if (this.resetRes.randValid) {
                  this.resetPage = false;
                  this.doneMes = ['Congrats! Your password is now reset.', 'Sign in now.']
                } else {
                  this.resetPage = false;
                  this.expiredPage = true;
                }
              } else {
                this.resetMes = 'Wrong reset link.';
              }
            },
            err => {
              this.resetPage = false;
              this.resErr = err.status;
            }
          );
        });
      } else {
        this.resetMes = "The passwords don't match."
        this.newPassErr = true;
        this.newPass2Err = true;
      }
    } else {
      if (this.resetGroup.get('newPass').errors) {
        this.resetMes = "Forgetting something?";
        this.newPassErr = true;
      } else {
        this.newPassErr = false;
      }
      if (this.resetGroup.get('newPass2').errors) {
        this.resetMes = "Forgetting something?";
        this.newPass2Err = true;
      } else {
        this.newPass2Err = false;
      }
    }
  }
}
