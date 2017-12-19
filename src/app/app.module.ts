import myJsApp from './components-1/app.module';

import { BrowserModule } from '@angular/platform-browser';

import { UpgradeModule } from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';



import { RootComponent } from './components-2/root/root.component';

import { HomeComponent } from './components-2/home/home.component';

import { ItemDirective } from './components-1/item/item.directive';


import { NgModule, Inject, Injectable, Component, Directive, Injector, ElementRef } from '@angular/core';

import { UpgradeComponent } from '@angular/upgrade/static';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    ItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  providers: [
    {
      provide: '$scope',
      useFactory: i => i.get('$rootScope'),
      deps: ['$injector']
    }
  ],
  bootstrap: [RootComponent],
  entryComponents: [
  ]
})

export class AppModule {
  constructor(upgrade: UpgradeModule) {
    upgrade.bootstrap(document.documentElement, [myJsApp.name]);
  }
}

