import { AppJsModule } from './app/hybrid/app-js.module';
import './app/hybrid/configs/router.config';

// HYBRID BOOTSTRAP
import { Injector } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UIRouter, UrlService } from '@uirouter/core';

import { AppModule } from './app/app.module';


// USING ANGULARJS CONFIG BLOCK, CALL `DEFERINTERCEPT()`.
// THIS TELLS UI-ROUTER TO DELAY THE INITIAL URL SYNC (UNTIL ALL BOOTSTRAPPING IS COMPLETE)
AppJsModule.config(['$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept()]);

// MANUALLY BOOTSTRAP THE ANGULAR APP
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const injector: Injector = platformRef.injector;
  const upgrade = injector.get(UpgradeModule) as UpgradeModule;

  // THE DOM MUST BE ALREADY BE AVAILABLE
  upgrade.bootstrap(document.body, [AppJsModule.name]);

  // INTIALIZE THE ANGULAR MODULE (GET() ANY UIROUTER SERVICE FROM DI TO INITIALIZE IT)
  const url: UrlService = injector.get(UIRouter).urlService;


  // INSTRUCT UIROUTER TO LISTEN TO URL CHANGES
  url.listen();
  url.sync();
});
