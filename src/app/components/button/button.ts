import { booleanAttribute, Component, input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

type Priority = 'primary' | 'secondary';

@Component({
  selector: 'button[ntButton]',
  template: `
    <ng-content/>
  `,
  styleUrl: './button.scss',
  host: {
    class: 'button',
    '[class.button_primary]': 'priority() === "primary"',
    '[class.button_secondary]': 'priority() === "secondary"',
    '[class.button_icon]': 'icon()',
  },
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None
})
export class Button {
  priority = input.required<Priority>();
  icon = input(false, { transform: booleanAttribute });
}
