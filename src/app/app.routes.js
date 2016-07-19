(function(angular) {
  'use strict';

  function routesConfig($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/mailbox'
      });
  }

  angular.module('app').config(routesConfig);

})(window.angular);
