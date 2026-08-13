import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Votar } from './votar';

describe('Votar', () => {
  let component: Votar;
  let fixture: ComponentFixture<Votar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Votar],
    }).compileComponents();

    fixture = TestBed.createComponent(Votar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
