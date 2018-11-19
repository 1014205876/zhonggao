import { TestBed, inject } from '@angular/core/testing';

import { DisassemblyValueService } from './disassembly-value.service';

describe('DisassemblyValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisassemblyValueService]
    });
  });

  it('should be created', inject([DisassemblyValueService], (service: DisassemblyValueService) => {
    expect(service).toBeTruthy();
  }));
});
