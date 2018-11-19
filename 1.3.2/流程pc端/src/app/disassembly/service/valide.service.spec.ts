import { TestBed, inject } from '@angular/core/testing';

import { ValideService } from './valide.service';

describe('ValideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValideService]
    });
  });

  it('should be created', inject([ValideService], (service: ValideService) => {
    expect(service).toBeTruthy();
  }));
});
