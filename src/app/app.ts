import { Component, ChangeDetectionStrategy, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tag, Link } from "./components/export";
import { Button } from "./components/button/button";
import { Label } from "./components/label/label";
import { Input } from "./components/input/input";
import { Switch } from "./components/switch/switch";
import { Checkbox } from "./components/checkbox/checkbox";
import { Radiobuton } from "./components/radiobuton/radiobuton";
import { Tabs } from "./components/tabs/tabs";
import { Tab } from "./components/tabs/tab";
import { FadeIn } from "./directives/fade-in";
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tag, Button, Label, Input, Switch, Checkbox, Radiobuton, Tabs, Link, Tab, FadeIn],
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
