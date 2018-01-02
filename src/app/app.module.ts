import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';

import { UIRouterModule } from '@uirouter/angular';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { homeState } from './components-2/home/home.route';
import { HomeComponent } from './components-2/home/home.component';

// import { PrefsModule } from './hybrid/prefs/prefs.module';

// Create a "future state" (a placeholder) for the Contacts
// Angular module which will be lazy loaded by UI-Router
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
  declarations: [
    // RootComponent,
    HomeComponent,
    // ItemDirective
  ],
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
    // // This forChild module registers the contacts future state and enables the lazy loaded contacts module
    // UIRouterModule.forChild({ states: [contactsFutureState] }),
    UIRouterModule.forChild({ states: [homeState] })
  ],
  providers: [
    // Provide the SystemJsNgModuleLoader when using Angular lazy loading
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },

    // Register some AngularJS services as Angular providers
    // { provide: 'DialogService', deps: ['$injector'], useFactory: getDialogService },
    // { provide: 'Contacts', deps: ['$injector'], useFactory: getContactsService },
  ]
})
export class AppModule {
  ngDoBootstrap() {
    /* no body: this disables normal (non-hybrid) Angular bootstrapping */
  }
}
