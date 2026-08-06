import { Component } from '@angular/core';
import { MenuEstadoService } from '../menu-estado';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})

export class Sidebar {
  constructor(public menu: MenuEstadoService) {}
}