import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'input[ntInput]',
  template: `
    <ng-content/>
  `,
  imports: [],
  styleUrl: './input.scss',
  host: {
    class: 'input',
  },
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None
})
export class Input {

}
