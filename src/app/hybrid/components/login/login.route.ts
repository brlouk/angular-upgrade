import * as angular from 'angular';
import { mainModule } from '../index.module';

mainModule.config(routerConfig);

function routerConfig($stateProvider) {
    const login = {
        name: 'login',
        url: '/login',
        component: 'login'
    };
    $stateProvider.state(login);
}
