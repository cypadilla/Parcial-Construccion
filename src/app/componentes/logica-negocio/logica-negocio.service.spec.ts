import { TestBed } from '@angular/core/testing';

import { LogicaNegocioService } from './logica-negocio.service';

describe('LogicaNegocioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogicaNegocioService = TestBed.get(LogicaNegocioService);
    expect(service).toBeTruthy();
  });
});
