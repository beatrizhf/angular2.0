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


cadastrarAluno(event : SubmitEvent) {
  event.preventDefault();

  const aluno = this.alunoModel();

  const situacao = aluno.media !== null && aluno.media >= 7 ? 'Aprovado' : 'Reprovado';

  const alunoComSituacao: Alunos = {
      ...aluno,
      situacao: situacao,
  };
  console.log(alunoComSituacao);

  this.alunos.update(valor => [...valor, alunoComSituacao]); //*AQUI*//

  this.alunoModel.set({
    nome: '',
    media: null,
    situacao: '',
  });

}}
