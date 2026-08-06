import { Routes } from '@angular/router';
import {Home} from './features/home/home';
import {Contato} from './features/contato/contato';
import {Projetos} from './features/projetos/projetos';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contato', component: Contato },
    { path: 'projetos', component: Projetos }
];
