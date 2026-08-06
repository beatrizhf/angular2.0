import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cards } from './cards';
import { signal } from '@angular/core';
import { Usuario } from '../../exercicio/array-usuarios/usuario';

describe('Cards', () => {
  let component: Cards;
  let fixture: ComponentFixture<Cards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cards],
    }).compileComponents();

    fixture = TestBed.createComponent(Cards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class Usuarios {

  protected usuarios = signal<Usuario[]>([
{
  id: 1,
  nome: 'Maria',
  idade: 19
  },

  {
    id: 2,
    nome: 'João',
    idade: 23
  }
])
}
