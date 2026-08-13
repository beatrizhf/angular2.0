import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Alunos } from '../alunos';

@Component({
  selector: 'app-notas',
  imports: [FormField],
  templateUrl: './notas.html',
  styleUrl: './notas.css',
})

export class Notas {
  alunoModel = signal<Alunos>({
    nome: '',
    media: null,
    situacao: '',
  })

  protected alunos = signal<Alunos[]>([]); //*AQUI//*

  alunoForm = form(this.alunoModel);

  cadastrarAluno(event: SubmitEvent) {
    event.preventDefault();

    const aluno = this.alunoModel();

    if (aluno.nome === '') {
      alert('Nome do aluno é obrigatório');
      return;
    }

    if (aluno.media === null || aluno.media < 0 || aluno.media > 10) {
      alert('Média inválida');
      return;
    }

    const situacao = aluno.media !== null && aluno.media >= 7 ? 'Aprovado' : 'Reprovado';

    const alunoComSituacao: Alunos = {
      ...aluno,
      situacao: situacao,
    };

    this.alunos.update(valor => [...valor, alunoComSituacao]); //*AQUI*//

    this.alunoModel.set({
      nome: '',
      media: null,
      situacao: '',
    });

  }
}

