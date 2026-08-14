import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'label[ntLabel]',
  template: `
    <ng-content/>
  `,
  styleUrl: './label.scss',
  host: {
    class: 'label'
  },
  encapsulation: ViewEncapsulation.None
})
export class Label {

}
