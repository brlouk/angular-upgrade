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
