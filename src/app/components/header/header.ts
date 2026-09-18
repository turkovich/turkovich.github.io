import { Component, ViewEncapsulation } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header[ntHeader]',
  imports: [FadeInDirective, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    class: 'header',
  },
  encapsulation: ViewEncapsulation.None
})
export class Header {

}
