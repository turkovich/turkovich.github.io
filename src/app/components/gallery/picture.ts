import { booleanAttribute, Component, ElementRef, input, viewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nt-picture',
  imports: [],
  template: `
    <div class="picture__thumb" (click)="openFullscreen()">
      <img [src]="url()" [alt]="alt()">
    </div>
    <dialog 
    #fullscreenDialog 
    data-lenis-prevent
    class="picture__dialog" 
    (click)="closeFullscreen()"
    >
      <img [src]="url()" [alt]="alt()">
    </dialog>
    <div class="picture__caption">
      {{ caption() }}
    </div>
  `,
  styleUrl: './gallery.scss',
  host: {
    class: 'picture',
    '[class.picture_inverted]': 'inverted()',
  },
  encapsulation: ViewEncapsulation.None
})

export class Picture {
  url = input.required<string>();
  alt = input<string>('');
  caption = input<string>('');
  inverted = input(false, { transform: booleanAttribute });

  dialog = viewChild<ElementRef<HTMLDialogElement>>('fullscreenDialog');

  openFullscreen(): void {
    this.dialog()?.nativeElement.showModal();
  }

  closeFullscreen(): void {
    this.dialog()?.nativeElement.close();
  }
}
