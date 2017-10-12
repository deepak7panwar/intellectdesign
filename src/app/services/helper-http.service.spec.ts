import { TestBed, inject } from '@angular/core/testing';

import { HelperHttpService } from './helper-http.service';

describe('HelperHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelperHttpService]
    });
  });

  it('should be created', inject([HelperHttpService], (service: HelperHttpService) => {
    expect(service).toBeTruthy();
  }));
});

