import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from '../../components/auth/register/register.component';

export const shouldLeaveGuard: CanDeactivateFn<RegisterComponent> = (
  component,
  route,
  state
) => {
  return component.shouldLeave();
};
