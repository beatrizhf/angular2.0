import { Component } from '@angular/core';
import { ArrayUsuarios } from "./array-usuarios/array-usuarios";
import { Form } from "./form/form";
import { Login } from "./login/login";
import { Notas } from "./notas/notas";
import { Votar } from "./votar/votar";

@Component({
  selector: 'app-exercicio',
  imports: [ArrayUsuarios, Form, Login, Notas, Votar],
  templateUrl: './exercicio.html',
  styleUrl: './exercicio.css',
})
export class Exercicio {}
