import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    )
  ]
})
  .catch(err => console.error(err));
