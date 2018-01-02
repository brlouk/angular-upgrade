import * as angular from 'angular';

/** @ngInject */
function LoginController($log, $state, loginService) {
    // INIT VARS
    var vm = this;

    // FUNCTIONS
    vm.doLogin = function () {
        loginService.login().then(function () {
            $state.go('home');
        });
    }
}


// LoginController.$inject = ['$log', '$state', 'loginService'];


angular.module('sampleapp').component('login', {
    templateUrl: './login.html',
    controller: LoginController,
    bindings: {

    }
});



