import { HomeComponent } from './pages/home/home.component';
import { appRoutes } from './app.routes';

describe('appRoutes', () => {
  it('should route the root path to the home page', () => {
    const rootRoute = appRoutes.find((route) => route.path === '');

    expect(rootRoute?.component).toBe(HomeComponent);
  });
});
