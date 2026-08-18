import { Service, signal } from '@angular/core';
import { Itens } from './itens';

@Service()
export class ListaService {

    protected listaModel = signal<Itens[]>([]);

    cadastrarItem(item: Itens) {
        this.listaModel.update((valor: Itens[]) => [...valor, item]);
    }
}
