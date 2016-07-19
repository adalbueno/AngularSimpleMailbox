(function(angular) {
  'use strict';

  var notifications = {
    MESSAGE: {
      REMOVE: 'MESSAGE.REMOVE',
      SELECT: 'MESSAGE.SELECT'
    }
  };

  angular.module('mailbox').constant('NOTIFICATIONS', notifications);

})(window.angular);
