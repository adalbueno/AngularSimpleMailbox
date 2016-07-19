(function(angular) {
  'use strict';

  function messageList($rootScope, NOTIFICATIONS) {
    return {
      restrict: 'E',
      scope: {
        collection: '='
      },
      templateUrl: '/views/templates/message-list.html',
      link: link
    };

    function link($scope) {

      /**
       * Removes a single message
       * @param {object} message - Message to remove
       */
      function remove(message) {
        $rootScope.$broadcast(NOTIFICATIONS.MESSAGE.REMOVE, message);
      }

      /**
       * Selects a single message
       * @param {object} message - Message to select
       */
      function select(message) {
        message.read = true;
        $rootScope.$broadcast(NOTIFICATIONS.MESSAGE.SELECT, message);
      }

      // EXPOSED METHODS
      $scope.remove = remove;
      $scope.select = select;

    }
  }

  angular.module('mailbox').directive('messageList', messageList);

})(window.angular);
