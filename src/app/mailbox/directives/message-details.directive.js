(function(angular) {
  'use strict';

  function messageDetails() {
    return {
      restrict: 'E',
      templateUrl: '/views/templates/message-details.html'
    };
  }

  angular.module('mailbox').directive('messageDetails', messageDetails);

})(window.angular);
