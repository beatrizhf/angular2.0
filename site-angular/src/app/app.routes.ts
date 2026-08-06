import { Routes } from '@angular/router';
import {Home} from './features/home/home';
import {Contato} from './features/contato/contato';
import {Projetos} from './features/projetos/projetos';
import { Exercicio } from './features/exercicio/exercicio';
import { ArrayUsuarios } from './features/exercicio/array-usuarios/array-usuarios';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contato', component: Contato },
    { path: 'projetos', component: Projetos },
    { path: 'array-usuarios', component: ArrayUsuarios },
    { path: 'exercicio', component: Exercicio },
];
