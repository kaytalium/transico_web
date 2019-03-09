import { TestBed } from '@angular/core/testing';

import { SchedulingProcessorService } from './scheduling-processor.service';

describe('SchedulingProcessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchedulingProcessorService = TestBed.get(SchedulingProcessorService);
    expect(service).toBeTruthy();
  });
});
