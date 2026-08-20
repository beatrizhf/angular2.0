import { Component, inject, signal } from '@angular/core';
import { Usuario } from './usuario';
import { ArrayUsuariosServices } from './array-usuarios-services';

@Component({
  selector: 'app-array-usuarios',
  imports: [],
  templateUrl: './array-usuarios.html',
  styleUrl: './array-usuarios.css',
})
export class ArrayUsuarios {

  protected readonly arrayUsuariosService = inject(ArrayUsuariosServices);

}

