import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';

interface loginInterface {
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

protected loginModel = signal<loginInterface>({
  email: '',
  senha: '',

});

protected loginForm = form(this.loginModel, (s) => {
  required(s.email, {message: 'Email é obrigatório'});
  email(s.email, {message: 'Email inválido'});
  required(s.senha, {message: 'Senha é obrigatória'});
});

protected estaLogado = signal <boolean>(false);

protected efetuarLogin(event: SubmitEvent) {
  event.preventDefault();

  const login = this.loginModel();

  if(login.email === 'bia@gmail.com' && login.senha === '123') {
    this.estaLogado.set(true);
  }
}}
