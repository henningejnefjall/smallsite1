import { TestBed, inject } from '@angular/core/testing';

import { MydataService } from './mydata.service';

describe('MydataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MydataService]
    });
  });

  it('should be created', inject([MydataService], (service: MydataService) => {
    expect(service).toBeTruthy();
  }));
});
