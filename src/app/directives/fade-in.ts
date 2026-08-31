import { DestroyRef, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[ntFadeIn]',
  host: {
    class: 'fade-in'
  }
})
export class FadeIn {
  private el = inject(ElementRef<HTMLElement>);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in_is_visible');
            // Убираем наблюдение, чтобы анимация сработала только один раз
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    observer.observe(this.el.nativeElement);

    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
