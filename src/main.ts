// import myJsApp from './app/components-1/app.module';
import { enableProdMode } from '@angular/core';
 import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { UpgradeModule } from '@angular/upgrade/static';
import { Injector } from '@angular/core';


if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .then(platformRef => {
//     const injector: Injector = platformRef.injector;
//     const upgrade = injector.get(UpgradeModule) as UpgradeModule;
//     upgrade.bootstrap(document.body, [myJsApp.name], { strictDi: true });
//   })
//   .catch(err => console.log(err));

 platformBrowserDynamic().bootstrapModule(AppModule);

