(function(angular) {
  'use strict';

  function routesConfig($routeProvider) {
    $routeProvider
      .when('/mailbox', {
        templateUrl: 'views/mailbox-messages.html',
        controller: 'messagesController',
        controllerAs: 'ctrl'
      });
  }

  angular.module('mailbox').config(routesConfig);

})(window.angular);
