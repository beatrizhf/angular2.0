import { Component, inject, signal } from '@angular/core';
import { Itens } from '../../itens';
import { form, FormField } from '@angular/forms/signals';
import { NotasService } from '../notas/notas-service';
import { ListaService } from './lista-service';

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

  protected cadastrarItem(event: SubmitEvent): void {
  event.preventDefault();

  const novoItem = this.itensModel().item.trim();

  if (!novoItem) {
    return;
  }

  this.item.update((itens) => [...itens, { item: novoItem },
  ]);

  this.itensModel.set({ item: '' });
}

  protected listaForm = form(this.itensModel, (s) => {})

  protected readonly listaService = inject(ListaService);

  
}
