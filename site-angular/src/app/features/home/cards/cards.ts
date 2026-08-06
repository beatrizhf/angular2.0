import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @ViewChild('trilha') trilha!: ElementRef;
  projetos = [
  { titulo: 'Identidade visual', descricao: 'Sistema de marca completo.', tags: ['Figma', 'Branding'] },
  { titulo: 'App de finanças', descricao: 'Fluxo pensado do zero.', tags: ['UX Research', 'Figma'] },
  { titulo: 'App WalkieDog', descricao: 'Aplicativo de passeio de pets.', tags: ['Figma', 'Branding'] },
  { titulo: 'Site Lothal', descricao: 'Site institucional da Lothal.', tags: ['UX Research', 'Figma'] },
  { titulo: 'DesignSystem Ailos', descricao: 'Design System do app Ailos.', tags: ['Figma', 'UX Research'] },
  { titulo: 'App Menu Cafeteria', descricao: 'Menu interativo para cafeteria.', tags: ['UX Research', 'Figma'] },
];

proximo() {
    this.trilha.nativeElement.scrollBy({ left: 340, behavior: 'smooth' });
  }

  anterior() {
    this.trilha.nativeElement.scrollBy({ left: -340, behavior: 'smooth' });
  }
}