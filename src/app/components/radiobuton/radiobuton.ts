import { Component, input, ViewEncapsulation } from '@angular/core';
import { Label } from '../label/label';

@Component({
  selector: 'nt-radiobuton',
  template: `
    <input type="radio" class="radio__control" id="radio" [checked]="checked()">
    <svg class="radio__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4"/>
    </svg>
    @if (label()) {
      <label ntLabel class="radio__label" for="radio">{{ label() }}</label>
    }
  `,
  imports: [Label],
  styleUrl: './radiobuton.scss',
  host: {
    class: 'radio',
  },
  encapsulation: ViewEncapsulation.None
})
export class Radiobuton {
  label = input<string>();
  checked = input<boolean>();
}
