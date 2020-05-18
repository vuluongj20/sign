import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

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
  expiredPage = false;
  invalidPage = false;
  // Resend link function
  resendLink() {
    this.route.params.subscribe(params => {
      const rand = params.rand;
      this.dataService.post('resend', {type: 'activate', rand: rand}).subscribe(
        () => {
          this.expiredPage = false;
          this.doneMes = ['Sent! Check your mailbox.'];
        },
        err => {
          this.resErr = err.status;
        }
      );
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const rand = params.rand;
      this.dataService.post('verify', {type: 'verify', rand: rand}).subscribe(
        data => {
          this.res = data;
          if (this.res.userFound) {
            if (this.res.randValid) {
              this.doneMes = ['Your email address is now verified!', 'Sign in now.'];
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
