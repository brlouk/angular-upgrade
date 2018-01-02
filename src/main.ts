// Google analytics
import './app/hybrid/util/ga';

////////////// HYBRID BOOTSTRAP ///////////////
import { Injector } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UIRouter, UrlService } from '@uirouter/core';
// import { visualizer } from '@uirouter/visualizer';

import { AppModule } from './app/app.module';
import { AppJsModule } from './app/hybrid/app-js.module';

// Using AngularJS config block, call `deferIntercept()`.
// This tells UI-Router to delay the initial URL sync (until all bootstrapping is complete)
AppJsModule.config([ '$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept() ]);

// Manually bootstrap the Angular app
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const injector: Injector = platformRef.injector;
  const upgrade = injector.get(UpgradeModule) as UpgradeModule;

  // The DOM must be already be available
  upgrade.bootstrap(document.body, [AppJsModule.name]);

  // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
  const url: UrlService = injector.get(UIRouter).urlService;


  // Instruct UIRouter to listen to URL changes
  url.listen();
  url.sync();
});

// Show ui-router-visualizer
// sampleAppModuleAngularJS.run(['$uiRouter', ($uiRouter) => visualizer($uiRouter) ]);

