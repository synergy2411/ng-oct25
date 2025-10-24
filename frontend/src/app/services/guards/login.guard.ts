import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  // console.log('ROUTE : ', route);
  // console.log('STATE : ', state);

  const authService = inject(AuthService);

  return authService.isAuthenticated();
};
