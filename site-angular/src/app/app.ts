import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Nav} from './shared/nav/nav';
import {Sidebar} from './shared/sidebar/sidebar';
import {Footer} from './shared/footer/footer';
import { Cards } from "./features/home/cards/cards";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Sidebar, Footer, Cards],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('site-angular');
}
