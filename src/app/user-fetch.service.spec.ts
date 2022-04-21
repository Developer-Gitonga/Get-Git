import { TestBed } from '@angular/core/testing';

import { UserFetchService } from './user-fetch.service';

describe('UserFetchService', () => {
  let service: UserFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
