import { Component, signal } from '@angular/core';
import { form, FormField, max, min, required } from '@angular/forms/signals';
import { Alunos } from '../alunos';

@Component({
  selector: 'app-notas',
  imports: [FormField],
  templateUrl: './notas.html',
  styleUrl: './notas.css',
})

export class Notas {
  protected alunoModel = signal<Alunos>({
    nome: '',
    media: null,
  })

  protected alunoForm = form(this.alunoModel, (s) => {
    required(s.nome, { message: 'O nome é obrigatório'});
    required(s.media, { message: 'A média é obrigatório'});

    min(s.media, 0, { message: 'Média não pode ser menor que 0'});
    max(s.media, 10, { message: 'Média não pode ser maior que 0'});
  });

  protected alunos = signal<Alunos[]>([]); //*Criação do Array vazia do aluno//*

  protected cadastrarAluno(event: SubmitEvent) {
    event.preventDefault();

    const aluno = this.alunoModel(); //*Aqui seria o final do cadastro, pega as infos do form e coloca no alunoModel (fonte da verdade) dá para usar aqui o console.log aluno para verificar//*

    this.alunos.update(valor => [...valor, aluno]); //*Aqui criou o card por fora do cadastro*//

    this.alunoModel.set({
      nome: '',
      media: null,
    });
  }
}

 

