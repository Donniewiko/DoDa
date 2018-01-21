import { TestBed, inject } from '@angular/core/testing';

import { SolarpanelService } from './solarpanel.service';

describe('SolarpanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolarpanelService]
    });
  });

  it('should be created', inject([SolarpanelService], (service: SolarpanelService) => {
    expect(service).toBeTruthy();
  }));
});
