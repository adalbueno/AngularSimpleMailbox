(function(angular) {
  'use strict';

  function messagesModel(messagesService, messagesAdapter) {

    // PROPERTIES
    var _data;

    // MODEL IMPLEMENTATION
    /**
     * Get all messages from the messages service
     */
    function get() {
      return messagesService.get().then(onGetSuccess);
    }

    /**
     * Get messages success handler
     * @param {object} result - Response object
     */
    function onGetSuccess(result) {
      _data = result.data.messages;
    }

    /**
     * Get list of messages
     */
    function data() {
      return messagesAdapter.getList(_data);
    }

    /**
     * Remove a single message from the collection
     * @param {object} message - Message to remove
     */
    function remove(message) {
      _data = _data.filter(function(item) {
        return item.uid !== message.uid;
      });
    }

    // EXPOSED METHODS
    return {
      data: data,
      get: get,
      remove: remove
    };

  }

  angular.module('mailbox').factory('messagesModel', messagesModel);

})(window.angular);
