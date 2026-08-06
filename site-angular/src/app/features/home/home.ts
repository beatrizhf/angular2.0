import { Component } from '@angular/core';
import { Sobre } from "./sobre/sobre";
import { Cards } from "./cards/cards";
import { Hero } from "./hero/hero";
import { Cta } from "./cta/cta";
import { ArrayUsuarios } from "../exercicio/array-usuarios/array-usuarios";

@Component({
  selector: 'app-home',
  imports: [Sobre, Cards, Hero, Cta, ArrayUsuarios],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
