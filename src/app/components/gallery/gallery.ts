import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nt-gallery',
  imports: [],
  template: `
    <ng-content/>
  `,
  styleUrl: './gallery.scss',
  host: {
    class: 'gallery',
  },
  encapsulation: ViewEncapsulation.None
})

export class Gallery {

}
