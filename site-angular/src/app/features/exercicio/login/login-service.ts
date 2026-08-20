import { Service } from '@angular/core';
import { LoginInterface } from './login-interface';

@Service()
export class LoginService {
    autenticarUsuario(credenciais: LoginInterface){
        return credenciais.email === 'bia@gmail.com' 
            && credenciais.senha === '123'
    }
}
