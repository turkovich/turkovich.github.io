import { afterNextRender, Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ntFadeIn]',
  host: {
    class: 'fade-in'
  }
})
export class FadeInDirective {
  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);

   constructor() {
    afterNextRender(() => {
      if (document.getElementById('global-loader')) {
        const unlisten = this.renderer.listen('window', 'app-loaded', () => {
          this.createObserver();
          unlisten();
        });
      } else {
        this.createObserver();
      }
    });
  }

  private createObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in_is_visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(this.el.nativeElement);
  }
}
