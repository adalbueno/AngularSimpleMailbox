(function(angular) {
  'use strict';

  function messagesAdapter(mailboxCommon) {

    /**
     * Get the formatted list of messages
     * @param {object} data - Messages list
     */
    function getList(data) {
      return angular.copy(data).map(mapList);
    }

    /**
     * Format a single message item
     * @param {object} Item - Message to format
     */
    function mapList(item) {
      item.time_sent = mailboxCommon.formatDate(item.time_sent);
      return item;
    }

    // EXPOSED METHODS
    return {
      getList: getList
    };

  }

  angular.module('mailbox').factory('messagesAdapter', messagesAdapter);

})(window.angular);
