import { Component } from '@angular/core';
import { MenuEstadoService } from '../menu-estado';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  constructor(public menu: MenuEstadoService) {}

  alternarTema() {
    document.documentElement.classList.toggle('escuro');
  }
}