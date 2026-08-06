import { Component } from '@angular/core';
import { ArrayUsuarios } from "./array-usuarios/array-usuarios";
import { Form } from "./form/form";

@Component({
  selector: 'app-exercicio',
  imports: [ArrayUsuarios, Form],
  templateUrl: './exercicio.html',
  styleUrl: './exercicio.css',
})
export class Exercicio {}
