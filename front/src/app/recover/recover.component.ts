import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css'],
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
export class RecoverComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  // Text at the top
  mes: string = "Type in your email address and we'll send you a link to reset your password.";
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
  // Touch events to replace :hover events on touch devices
  onTouchStart($event) {
    $event.stopPropagation();
    $event.currentTarget.classList.add('touch');
  }
  onTouchEnd($event) {
    $event.stopPropagation();
    $event.currentTarget.classList.remove('touch');
  }
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
            this.doneMes = ['Done! Check your mailbox now for an email from us.'];
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
        this.mes = "Make sure you typed in an email.";
      }
      if (this.forgotEmail.errors.required) {
        this.mes = 'Forgetting something?';
      }
    }
  };

  ngOnInit() {
  }

}
