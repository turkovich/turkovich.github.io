import { afterNextRender, Directive, DOCUMENT, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[ntFadeIn]',
  host: {
    class: 'fade-in'
  }
})
export class FadeInDirective {
  private el = inject(ElementRef<HTMLElement>);
  private document = inject(DOCUMENT);

  constructor() {
    afterNextRender(() => {
      this.initObserver();
    });
  }

  private async initObserver() {
    // Ждём, пока браузер загрузит все шрифты
    if ('fonts' in this.document) {
      await (this.document as any).fonts.ready;
    }

    // Даём браузеру один кадр на пересчёт layout
    requestAnimationFrame(() => {
      this.createObserver();
    });
  }

  private createObserver() {
    console.log('[FadeIn] Observer created for:', this.el.nativeElement);
    
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
