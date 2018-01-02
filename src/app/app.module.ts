import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';

import { UIRouterModule } from '@uirouter/angular';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { homeState } from './components/home/home.route';
import { HomeComponent } from './components/home/home.component';

// THE MAIN NGMODULE FOR THE ANGULAR PORTION OF THE HYBRID APP
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    // PROVIDE ANGULAR UPGRADE CAPABILITIES
    UpgradeModule,
    // PROVIDES THE @UIROUTER/ANGULAR-HYBRID DIRECTIVES
    UIRouterUpgradeModule,
    // PROVIDES THE @UIROUTER/ANGULAR DIRECTIVES
    UIRouterModule,
    UIRouterModule.forChild({ states: [homeState] })
  ],
  providers: [
    // PROVIDE THE SYSTEMJSNGMODULELOADER WHEN USING ANGULAR LAZY LOADING
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ]
})
export class AppModule {
  ngDoBootstrap() {
    /* NO BODY: THIS DISABLES NORMAL (NON-HYBRID) ANGULAR BOOTSTRAPPING */
  }
}
