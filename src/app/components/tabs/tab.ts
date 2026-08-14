import { Component, input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Label } from '../label/label';

@Component({
  selector: 'nt-tab',
  template: `
    <input type="radio" class="tab__control" [name]="name()" [id]="tabId()" [checked]="checked()">
    <label ntLabel class="tab__label" [attr.for]="tabId()">{{ label() }}</label>
  `,
  imports: [Label],
  styleUrl: './tabs.scss',
  host: {
    class: 'tab',
  },
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None
})
export class Tab {
  label = input.required<string>();
  tabId = input.required<string>();
  name = input.required<string>();
  checked = input<boolean>();
}
