import { Component, signal } from '@angular/core';
import { Produto } from './produto';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-form',
  imports: [FormField],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  produtoModel = signal<Produto>({
    titulo: '',
    descricao: '',
    preco: null,
  })

  produtoForm = form(this.produtoModel);

  cadastrarProduto(event : SubmitEvent) {
    event.preventDefault();

    const produto = this.produtoModel();

    console.log(produto);
  }
}
