(function(angular) {
  'use strict';

  function messageHeader() {
    return {
      restrict: 'E',
      scope: {
        ngModel: '='
      },
      templateUrl: '/views/templates/message-header.html'
    };
  }

  angular.module('mailbox').directive('messageHeader', messageHeader);

})(window.angular);
