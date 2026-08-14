import { Component, ViewEncapsulation } from '@angular/core';

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
  encapsulation: ViewEncapsulation.None
})
export class Tabs {

}
