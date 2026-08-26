import { Component, ViewEncapsulation, ChangeDetectionStrategy, input } from '@angular/core';

type Type = 'default' | 'inverted';

@Component({
  selector: 'a[ntLink]',
  template: `
    <ng-content/>
    <svg class="link__external" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M8.20703 7H6.20703V3.41406L1.41406 8.20703L0 6.79297L4.79297 2H1.20703V0H8.20703V7Z"/>
    </svg>
  `,
  styleUrl: './link.scss',
  host: {
    class: 'link link_default',
    '[class.link_default]': 'type() === "default"',
    '[class.link_inverted]': 'type() === "inverted"',
  },
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None
})
export class Link {
  type = input<Type>('default');
}
