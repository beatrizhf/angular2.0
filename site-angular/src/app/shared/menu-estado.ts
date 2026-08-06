import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuEstadoService {
  aberto = signal(false);

  alternar() {
    this.aberto.update(valor => !valor);
  }

  fechar() {
    this.aberto.set(false);
  }
}