import { Component, ChangeDetectionStrategy, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Button,
  Tag,
  Link,
  Radiobuton,
  Tabs,
  Tab,
  Checkbox,
  Label,
  Input,
  Switch,
} from './components/export';
import { FadeInDirective } from "./directives/export";
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tag, Button, Label, Input, Switch, Checkbox, Radiobuton, Tabs, Link, Tab, FadeInDirective],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy {
  private lenis!: Lenis;

   ngAfterViewInit(): void {
    this.lenis = new Lenis({
      lerp: 0.1,           
      wheelMultiplier: 1,  
      smoothWheel: true,
      autoRaf: true    
    });
  }

  ngOnDestroy(): void {
    this.lenis?.destroy();
  }
}
