import * as angular from 'angular';
import { mainModule } from '../index.module';

mainModule.config(routerConfig);

/** @ngInject */
function routerConfig($stateProvider) {
    const home = {
        // parent: 'main',
        name: 'home',
        url: '/home',
        component: 'home'
    };
    $stateProvider.state(home);
}