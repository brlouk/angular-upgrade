import * as angular from 'angular';

export let ItemComponent = {
  template: `<p>Item component: <strong>{{ $ctrl.title }}</strong></p>`,
  bindings: {
    title: '<'
  },
  controller: function () {
    const ctrl = this;
    ctrl.$onInit = function () {
    };
  }
};

angular.module('ng1App', [])
  .component('ng1Item', ItemComponent);
