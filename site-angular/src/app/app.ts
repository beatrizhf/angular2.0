import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Nav} from './shared/nav/nav';
import {Sidebar} from './shared/sidebar/sidebar';
import {Footer} from './shared/footer/footer';
import { Form } from "./features/exercicio/form/form";
import { Exercicio } from "./features/exercicio/exercicio";
import { ArrayUsuarios } from "./features/exercicio/array-usuarios/array-usuarios";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Sidebar, Footer, Form, Exercicio, ArrayUsuarios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('site-angular');
}
