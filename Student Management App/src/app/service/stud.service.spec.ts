import { TestBed } from '@angular/core/testing';

import { StudService } from './stud.service';

describe('StudService', () => {
  let service: StudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
