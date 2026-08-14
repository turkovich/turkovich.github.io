import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'label[ntLabel]',
  template: `
    <ng-content/>
  `,
  styleUrl: './label.scss',
  host: {
    class: 'label'
  },
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None
})
export class Label {

}
