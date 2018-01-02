import * as angular from 'angular';

import { mainModule } from '../index.module';

import './login.route';
import './login.service';

/** @ngInject */
function LoginController($log, $state, loginService) {
    // INIT VARS
    const ctrl = this;

    ctrl.$onInit = function () {
        ctrl.currentPage = 4;
        ctrl.totalItems = 64;
    };


    // FUNCTIONS
    ctrl.doLogin = function () {
        loginService.login().then(function () {
            $state.go('home2');
        });
    }
}

// LoginController.$inject = ['$log', '$state', 'loginService'];


mainModule.component('login', {
    templateUrl: './login.html',
    controller: LoginController,
    bindings: {

    }
});



