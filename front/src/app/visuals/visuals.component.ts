import { Component, Input } from '@angular/core';
import { trigger, style, query, state, transition, animate, animateChild, group } from '@angular/animations';

@Component({
  selector: 'app-visuals',
  templateUrl: './visuals.component.html',
  styleUrls: ['./visuals.component.css'],
  animations: [
    trigger('fade', [
      transition(':leave', [
        style({
          position: 'absolute',
          opacity: 1
        }),
        animate('540ms cubic-bezier(0.55, 0, 1, 0.45)', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class VisualsComponent {
  @Input() currentRoute: String;
  loaded: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 0)
  }
}
