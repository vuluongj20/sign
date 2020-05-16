import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { trigger, style, query, transition, animate, animateChild, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute'
          })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        query(':leave', [
          animate('540ms cubic-bezier(0.55, 0, 1, 0.45)', style({ opacity: 0}))
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Login';
  prepareRoute(outlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
