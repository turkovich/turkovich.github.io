import { Component, input, ViewEncapsulation } from '@angular/core';

type Theme = 'design' | 'code';

@Component({
  selector: 'nt-tag',
  template: `
    <ng-content/>
  `,
  styleUrl: './tag.scss',
  host: {
    class: 'tag',
    '[class.tag_design]': 'theme() === "design"',
    '[class.tag_code]': 'theme() === "code"',
  },
  encapsulation: ViewEncapsulation.None
})

export class Tag {
  theme = input.required<Theme>();
}
