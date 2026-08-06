import { TestBed } from '@angular/core/testing';

import { MenuEstado } from './menu-estado';

describe('MenuEstado', () => {
  let service: MenuEstado;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuEstado);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
