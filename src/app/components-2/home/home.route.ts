import { HomeComponent } from './home.component';

/**
 * This state allows the user to set their application preferences
 */
export const homeState = {
  // parent: 'app',
  name: 'home2',
  url: '/home2',
  component: HomeComponent,
  // Mark this state as requiring authentication.  See ../global/requiresAuth.hook.js.
  data: { requiresAuth: true }
};
