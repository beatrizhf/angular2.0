import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayCompras } from './array-compras';

describe('ArrayCompras', () => {
  let component: ArrayCompras;
  let fixture: ComponentFixture<ArrayCompras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayCompras],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrayCompras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
