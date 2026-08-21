import { Component, inject, signal } from '@angular/core';
import { Cadastrado } from './cadastrado';
import { form, FormField } from '@angular/forms/signals';
import { CadastroService } from './cadastro-service';

@Component({
  selector: 'app-cadastro',
  imports: [FormField],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

protected readonly cadastroService = inject(CadastroService);

protected cadastroModel = signal<Cadastrado>({
    id: null,
    titulo: '',
    corpo: '',
});

//protected cadastrados = signal<Cadastrado[]>([]);

protected cadastroForm = form(this.cadastroModel, (s) => {})

protected efetuarCadastro(event: SubmitEvent) {
  event.preventDefault();

  const cadastrado = this.cadastroModel();
}



//cadastrarCadastro(cadastrado: Cadastrado) { 
//this.cadastrados.update(valor => [...valor, cadastrado]);

//console.log(cadastrado);

//}

}
