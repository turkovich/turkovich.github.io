import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[ntFadeIn]',
  host: {
    class: 'fade-in'
  }
})
export class FadeInDirective {
  private el = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in_is_visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15}
      );

      observer.observe(this.el.nativeElement);
    });
  }
}
