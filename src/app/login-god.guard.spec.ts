import { TestBed, async, inject } from '@angular/core/testing';

import { LoginGodGuard } from './login-god.guard';

describe('LoginGodGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGodGuard]
    });
  });

  it('should ...', inject([LoginGodGuard], (guard: LoginGodGuard) => {
    expect(guard).toBeTruthy();
  }));
});
