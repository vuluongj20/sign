import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

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
export class VisualsComponent implements OnInit {
  @Input() currentRoute: String;
  loaded = false;
  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 0);
  }
}
