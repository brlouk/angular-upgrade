import { HomeComponent } from './home.component';

export const homeState = {
  name: 'home',
  url: '/home',
  component: HomeComponent,
  // MARK THIS STATE AS REQUIRING AUTHENTICATION.  SEE ../GLOBAL/REQUIRESAUTH.HOOK.JS.
  data: { requiresAuth: true }
};
