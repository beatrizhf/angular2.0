import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';
import { LoginService } from './login-service';
import { LoginInterface } from './login-interface';


@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  protected readonly loginService = inject(LoginService)

  protected loginModel = signal<LoginInterface>({
    nome: '',
    email: '',
    senha: '',
    confirma: '',
    nascimento: '',
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

  this.loginService.autenticarUsuario(login);
  
  this.loginForm().reset();
  
}}
