import { Component, signal } from '@angular/core';
import { Candidatos } from '../candidatos';

@Component({
  selector: 'app-votar',
  imports: [],
  templateUrl: './votar.html',
  styleUrl: './votar.css',
})
export class Votar {

  protected candidato1 = signal<Candidatos>({
  nome: 'Egídio',
  partido: 'FDP',
  qtvotos: 2500,
});

  protected candidato2 = signal<Candidatos>({
  nome: 'Maria',
  partido: 'PSOL',
  qtvotos: 8600,
})

votarCandidato1() {
  const candidato = this.candidato1();
  candidato.qtvotos++;
  this.candidato1.set(candidato); 

}

votarCandidato2() {
  const candidato = this.candidato2();
  candidato.qtvotos++;
  this.candidato2.set(candidato);
}
}