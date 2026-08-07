import { Component, signal } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-array-usuarios',
  imports: [],
  templateUrl: './array-usuarios.html',
  styleUrl: './array-usuarios.css',
})
export class ArrayUsuarios {

  protected usuarios = signal<Usuario[]>([
{
  id: 1,
  nome: 'Maria',
  idade: 19
  },

  {
    id: 2,
    nome: 'João',
    idade: 23
  }
])
}

