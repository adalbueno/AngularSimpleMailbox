(function(angular) {
  'use strict';

  function messagesService($http, SETTINGS) {

    /**
     * Get messages from the http service
     */
    function get() {
      return $http.get(SETTINGS.STORAGE.MESSAGES);
    }

    // EXPOSED METHODS
    return {
      get: get
    };

  }

  angular.module('mailbox').service('messagesService', messagesService);

})(window.angular);
