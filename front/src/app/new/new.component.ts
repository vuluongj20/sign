import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translate(-35%, -50%)'
        }),
        animate('300ms ease')
      ]),
      transition(':leave', [
        animate('100ms ease', style({
          opacity: 0,
          transform: 'translate(-65%, -50%)'
        }))
      ])
    ])
  ]
})
export class NewComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  // Text at the top
  newMes: string = 'Type in the new account details.';
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
  // Touch events to replace :hover events on touch devices
  onTouchStart($event) {
    $event.stopPropagation();
    $event.currentTarget.classList.add('touch');
  }
  onTouchEnd($event) {
    $event.stopPropagation();
    $event.currentTarget.classList.remove('touch');
  }
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
              this.doneMes = ["You're all set. Welcome to the Team!", 'Sign in now'];
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
        this.newMes = "The two passwords don't match.";
      }
    } else {
      if (this.newGroup.get('email').errors) {
        if (this.newGroup.get('email').errors.required) {
          this.newMes = 'Forgetting something?';
          this.newemailErr = true;
        }
        if (this.newGroup.get('email').errors.email) {
          this.newMes = 'Make sure you typed in an email.';
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

  ngOnInit() {
  }

}
