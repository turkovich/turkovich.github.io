import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Tag, Button, Input, Label, Switch, Checkbox, Radiobuton, Tabs, Link, Tab, Header, Footer } from '../../components/export';
import { FadeInDirective } from '../../directives/fade-in';
import Lenis from 'lenis';

@Component({
  selector: 'nt-main',
  imports: [
    Header,
    Footer,
    Tag,
    Button,
    Input,
    Label,
    Switch,
    Checkbox,
    Radiobuton,
    Tabs,
    Link,
    Tab,
    FadeInDirective,
    RouterLinkWithHref,
  ],
  templateUrl: './main.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './main.scss',
})
export class MainPage implements AfterViewInit, OnDestroy {
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
