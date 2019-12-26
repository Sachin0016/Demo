import { TestBed } from '@angular/core/testing';

import { ClickCollectOrderService } from './click-collect-order.service';

describe('ClickCollectOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickCollectOrderService = TestBed.get(ClickCollectOrderService);
    expect(service).toBeTruthy();
  });
});
