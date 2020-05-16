import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
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
  // Resend link function
  resendLink() {
    this.route.params.subscribe(params => {
      var rand = params.rand;
      this.dataService.post('resend', {type: 'activate', rand: rand}).subscribe(
        () => {
          this.expiredPage = false;
          this.doneMes = ['Sent! Check your mailbox.'];
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
