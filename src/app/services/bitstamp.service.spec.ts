import { TestBed, inject } from '@angular/core/testing';

import { BitstampService } from './bitstamp.service';

describe('BitstampService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitstampService]
    });
  });

  it('should ...', inject([BitstampService], (service: BitstampService) => {
    expect(service).toBeTruthy();
  }));
});
