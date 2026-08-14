import { Component, input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Label } from '../label/label';

@Component({
  selector: 'nt-switch',
  template: `
    <input type="checkbox" class="switch__control" id="switch">
    @if (label()) {
      <label ntLabel class="switch__label" for="switch">{{ label() }}</label>
    }
  `,
  imports: [Label],
  styleUrl: './switch.scss',
  host: {
    class: 'switch'
  },
   changeDetection: ChangeDetectionStrategy.Eager,
   encapsulation: ViewEncapsulation.None
})
export class Switch {
  label = input<string>();
}
