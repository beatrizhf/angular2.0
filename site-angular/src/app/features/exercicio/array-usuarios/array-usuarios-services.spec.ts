import { TestBed } from '@angular/core/testing';

import { ArrayUsuariosServices } from './array-usuarios-services';

describe('ArrayUsuariosServices', () => {
  let service: ArrayUsuariosServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayUsuariosServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
