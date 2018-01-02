import * as angular from 'angular';
import { mainModule } from '../index.module';

mainModule.factory('loginService', loginService);

function loginService($http, $q, $timeout/*, config*/) {

    const service = {
        login: login
    };
    return service;

    function login() {
        return $q(function (resolve) {
            $timeout(function () {
                resolve('OK');
            }, 200);
        });
    }

}

