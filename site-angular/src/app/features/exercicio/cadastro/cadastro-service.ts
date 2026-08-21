import { Service, signal } from '@angular/core';
import { Cadastrado } from './cadastrado';

@Service()
export class CadastroService {

cadastrados = signal<Cadastrado[]>([]);

cadastrarCadastro(cadastrado: Cadastrado) { 
  this.cadastrados.update(valor => [...valor, cadastrado]);

  console.log(cadastrado);

}
}
