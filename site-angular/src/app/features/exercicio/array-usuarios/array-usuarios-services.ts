import { Service, signal } from '@angular/core';
import { Usuario } from './usuario';

@Service()
export class ArrayUsuariosServices {

readonly usuarios = signal<Usuario[]>([
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
