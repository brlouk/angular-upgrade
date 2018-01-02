/**
 * THIS FILE IMPORTS THE THIRD PARTY LIBRARY DEPENDENCIES, THEN CREATES THE ANGULAR MODULE "DEMO"
 * AND EXPORTS IT.
 */

// EXTERNAL DEPENDENCIES
import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { upgradeModule } from '@uirouter/angular-hybrid';
import 'angular-ui-bootstrap';

// FEATURE MODULES
import { mainModule } from './components/index';

// CREATE THE ANGULAR 1 MODULE
//
// SINCE IT IS EXPORTED, OTHER PARTS OF THE APPLICATION (IN OTHER FILES) CAN THEN IMPORT IT AND REGISTER THINGS.
// IN BOOTSTRAP.JS, THE MODULE IS IMPORTED, AND THE COMPONENTS, SERVICES, AND STATES ARE REGISTERED.
export const AppJsModule = angular.module('app', [
  uiRouter,
  upgradeModule.name,
  'ui.bootstrap',
  mainModule.name
]);

// APPLY SOME GLOBAL CONFIGURATION...

// IF THE USER ENTERS A URL THAT DOESN'T MATCH ANY KNOWN URL (STATE), SEND THEM TO `/LOGIN`
const otherwiseConfigBlock = ['$urlRouterProvider', $urlRouterProvider => { $urlRouterProvider.otherwise('/login'); }];
AppJsModule.config(otherwiseConfigBlock);

// ENABLE TRACING OF EACH TRANSITION... (CHECK THE JAVASCRIPT CONSOLE)

// THIS SYNTAX `$TRACE.ENABLE(1)` IS AN ALTERNATIVE TO `$TRACE.ENABLE("TRANSITION")`.
// BESIDES "TRANSITION", YOU CAN ALSO ENABLE TRACING FOR : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
const traceRunBlock = ['$trace', $trace => { $trace.enable(1); }];
AppJsModule.run(traceRunBlock);

