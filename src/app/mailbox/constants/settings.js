(function(angular) {
  'use strict';

  var settings = {
    STORAGE: {
      MESSAGES: '/data/messages.json'
    },
    FORMAT: {
      DATE: 'EEE dd MMMM, HH:mm'
    },
    TIMEZONE: 'UTC'
  };

  angular.module('mailbox').constant('SETTINGS', settings);

})(window.angular);
