import { Service, signal } from '@angular/core';
import { Alunos } from '../alunos';

@Service()
export class NotasService {

    alunos = signal<Alunos[]>([]); //array 

    cadastrarAluno(aluno: Alunos) { 
        this.alunos.update(valor => [...valor, aluno]); //*Aqui criou o card por fora do cadastro*//
    }

}
