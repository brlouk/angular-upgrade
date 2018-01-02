import * as angular from 'angular';
import { UIRouterModule } from '@uirouter/angular';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { UrlService} from '@uirouter/core';
import uiBootstrap from 'angular-ui-bootstrap';

export default angular.module('ng1App', ['ui.router', 'ui.router.upgrade']);


angular.module('ng1App').config([ '$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept() ]);
