import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tag, Button, Label, Input, Switch, Checkbox, Radiobuton, Tabs, Link, Tab],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
