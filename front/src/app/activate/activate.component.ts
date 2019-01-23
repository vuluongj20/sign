import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('300ms ease')
      ])
    ]),
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
export class ActivateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  // Error code for error page
  resErr: number;
  // Message on success pages
  doneMes: any;
  // Response from server
  res: any;
  resendRes: any;
  // Views, true means that view is shown
  expiredPage: boolean = false;
  invalidPage: boolean = false;
  // Touch events to replace :hover events on touch devices
  onTouchStart($event) {
    $event.stopPropagation();
    $event.currentTarget.classList.add('touch');
  }
  onTouchEnd($event) {
    $event.stopPropagation();
    $event.currentTarget.classList.remove('touch');
  }
  // Resend link function
  resendLink() {
    this.route.params.subscribe(params => {
      var rand = params.rand;
      this.dataService.post('resend', {type: 'activate', rand: rand}).subscribe(
        () => {
          this.expiredPage = false;
          this.doneMes = ['Resent! Check your mailbox.'];
        },
        err => {
          this.resErr = err.status;
        }
      )
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var rand = params.rand;
      this.dataService.post('verify', {rand: rand}).subscribe(
        data => {
          this.res = data;
          if (this.res.userFound) {
            if (this.res.randValid) {
              this.doneMes = ['Great! Your email is now verified.', 'Sign in now'];
            } else {
              this.expiredPage = true;
            }
          } else {
            this.invalidPage = true;
          }
        },
        err => {
          this.resErr = err.status;
        }
      );
    });
  }

}
