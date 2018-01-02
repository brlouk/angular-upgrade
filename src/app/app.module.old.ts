import myJsApp from './components-1/ng1.module';
import './components-1/app.module';

import { BrowserModule } from '@angular/platform-browser';

import { UpgradeModule } from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';



import { RootComponent } from './components-2/root/root.component';

import { HomeComponent } from './components-2/home/home.component';

import { ItemDirective } from './components-1/item/item.directive';


import { NgModule, Inject, Injectable, Component, Directive, Injector, ElementRef } from '@angular/core';

import { UpgradeComponent } from '@angular/upgrade/static';

import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { UIRouterModule } from '@uirouter/angular';

import { UrlService} from '@uirouter/core';

// @NgModule({
//   declarations: [
//     RootComponent,
//     HomeComponent,
//     // ItemDirective
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     // Provide Angular upgrade capabilities
//     UpgradeModule,
//     // Provides the @uirouter/angular-hybrid directives
//     UIRouterUpgradeModule,
//     // Provides the @uirouter/angular directives
//     UIRouterModule
//   ],
//   providers: [
//     {
//       provide: '$scope',
//       useFactory: i => i.get('$rootScope'),
//       deps: ['$injector']
//     }
//   ],
//   bootstrap: [RootComponent],
//   entryComponents: [
//   ]
// })

// export class AppModule {
//   constructor(upgrade: UpgradeModule) {
//     // upgrade.bootstrap(document.documentElement, [myJsApp.name]);
//     // const url: UrlService = injector.get(UrlService);

//     // Instruct UIRouter to listen to URL changes
//     // urlService.listen();
//     // urlService.sync();
//   }
// }


import { NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
// import { UpgradeModule } from '@angular/upgrade/static';
// import { BrowserModule } from '@angular/platform-browser';

// import { UIRouterModule } from '@uirouter/angular';
// import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

// import { PrefsModule } from './prefs/prefs.module';

// // Create a "future state" (a placeholder) for the Contacts
// // Angular module which will be lazy loaded by UI-Router
// export const contactsFutureState = {
//   name: 'contacts.**',
//   url: '/contacts',
//   loadChildren: './contacts/contacts.module#ContactsModule',
// };

// export function getDialogService($injector) {
//   return $injector.get('DialogService');
// }

// export function getContactsService($injector) {
//   return $injector.get('Contacts');
// }

// The main NgModule for the Angular portion of the hybrid app
@NgModule({
  imports: [
    BrowserModule,
    // Provide angular upgrade capabilities
    UpgradeModule,
    // Provides the @uirouter/angular-hybrid directives
    UIRouterUpgradeModule,
    // Provides the @uirouter/angular directives
    UIRouterModule,
    // The preferences feature module
    // PrefsModule,
    // This forChild module registers the contacts future state and enables the lazy loaded contacts module
    // UIRouterModule.forChild({ states: [contactsFutureState] }),
  ],
  providers: [
    // Provide the SystemJsNgModuleLoader when using Angular lazy loading
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },

    // // Register some AngularJS services as Angular providers
    // { provide: 'DialogService', deps: ['$injector'], useFactory: getDialogService },
    // { provide: 'Contacts', deps: ['$injector'], useFactory: getContactsService },
  ]
})
export class AppModule {
  ngDoBootstrap() {
    /* no body: this disables normal (non-hybrid) Angular bootstrapping */
  }
}




