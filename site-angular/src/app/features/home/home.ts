import { Component } from '@angular/core';
import { Sobre } from "./sobre/sobre";
import { Cards } from "./cards/cards";
import { Hero } from "./hero/hero";
import { Cta } from "./cta/cta";

@Component({
  selector: 'app-home',
  imports: [Sobre, Cards, Hero, Cta],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
