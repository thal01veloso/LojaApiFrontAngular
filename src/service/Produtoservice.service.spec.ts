/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProdutoserviceService } from './Produtoservice.service';

describe('Service: Produtoservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutoserviceService]
    });
  });

  it('should ...', inject([ProdutoserviceService], (service: ProdutoserviceService) => {
    expect(service).toBeTruthy();
  }));
});
