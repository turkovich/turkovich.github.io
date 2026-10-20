import { Component } from '@angular/core';
import { Gallery, Link, Picture, Header, Footer } from '../../components/export';
import { FadeInDirective } from '../../directives/fade-in';
import Lenis from 'lenis';

@Component({
  selector: 'nt-microprism-glass',
  imports: [Gallery, Picture, Link, FadeInDirective, Header, Footer],
  templateUrl: './microprism-glass.html',
  styleUrl: './microprism-glass.scss',
})

export class MicroprismGlassPage {
  private lenis!: Lenis;

  ngAfterViewInit(): void {
    this.lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
      autoRaf: true,
    });
  }

  ngOnDestroy(): void {
    this.lenis?.destroy();
  }
}
