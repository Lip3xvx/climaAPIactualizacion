import { TestBed } from '@angular/core/testing';

import { ClientsService} from './clients-sevice.service';

describe('ClientsSeviceService', () => {
  let service: ClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});