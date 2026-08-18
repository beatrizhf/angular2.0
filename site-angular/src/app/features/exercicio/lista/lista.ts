import { Component, inject, signal } from '@angular/core';
import { Itens } from './itens';
import { form, FormField } from '@angular/forms/signals';
import { NotasService } from '../notas/notas-service';

@Component({
  selector: 'app-lista',
  imports: [FormField],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {

  protected itensModel = signal<Itens>({
      item: '',
    })

  protected item = signal<Itens[]>([]);

  protected cadastrarItem(event: SubmitEvent) {
    event.preventDefault();
  }



protected readonly notasService = inject(NotasService);

protected listaForm = form(this.itensModel, (s) => {})
}
