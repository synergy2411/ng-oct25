import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return array of friends', () => {
    let friends = service.getBasicData();
    expect(friends.length).not.toEqual(0);
  });

  it('should return promise object', async () => {
    const data = await service.getPromiseData();
    expect(data.message).not.toBeUndefined();
  });

  it('should return observable string', () => {
    service.getObserableData().subscribe((message) => {
      expect(message).not.toBeNull();
    });
  });
});
