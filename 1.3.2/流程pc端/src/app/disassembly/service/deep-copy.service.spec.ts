import { TestBed, inject } from '@angular/core/testing';

import { DeepCopyService } from './deep-copy.service';

describe('DeepCopyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeepCopyService]
    });
  });

  it('should be created', inject([DeepCopyService], (service: DeepCopyService) => {
    expect(service).toBeTruthy();
  }));
});
