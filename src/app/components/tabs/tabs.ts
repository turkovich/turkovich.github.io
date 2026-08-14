import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nt-tabs',
  template: `
    <ng-content>
  `,
  imports: [],
  styleUrl: './tabs.scss',
  host: {
    class: 'tabs',
  },
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None
})
export class Tabs {

}
