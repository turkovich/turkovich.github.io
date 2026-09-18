import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'footer[ntFooter]',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  host: {
    class: 'footer',
  },
  encapsulation: ViewEncapsulation.None
})
export class Footer {
  
}
