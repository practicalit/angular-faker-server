import { TestBed } from '@angular/core/testing';

import { SubjectObservableService } from './subject-observable.service';

describe('SubjectObservableService', () => {
  let service: SubjectObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
