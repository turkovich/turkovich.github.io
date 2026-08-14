import { Component, ViewEncapsulation } from '@angular/core';

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
  encapsulation: ViewEncapsulation.None
})
export class Input {

}
