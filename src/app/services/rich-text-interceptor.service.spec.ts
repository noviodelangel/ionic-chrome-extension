import { TestBed } from '@angular/core/testing';

import { RichTextInterceptorService } from './rich-text-interceptor.service';

describe('RichTextInterceptorService', () => {
  let service: RichTextInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RichTextInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
