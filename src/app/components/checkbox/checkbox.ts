import { Component, input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Label } from '../label/label';

@Component({
  selector: 'nt-checkbox',
  template: `
    <input type="checkbox" class="checkbox__control" id="check" [checked]="checked()">
    <svg class="checkbox__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.707 7.70703L11 16.4141L6.79297 12.207L8.20703 10.793L11 13.5859L18.293 6.29297L19.707 7.70703Z"/>
    </svg>
    @if (label()) {
      <label ntLabel class="checkbox__label" for="check">{{ label() }}</label>
    }
  `,
  imports: [Label],
  styleUrl: './checkbox.scss',
  host: {
    class: 'checkbox',
  },
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None
})
export class Checkbox {
  label = input<string>();
  checked = input<boolean>();
}
