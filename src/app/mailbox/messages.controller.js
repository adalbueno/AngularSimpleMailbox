(function(angular) {
  'use strict';

  function messagesController($scope, messagesModel, NOTIFICATIONS) {

    // PROPERTIES
    var vm = this;
    vm.activeMessage = false;

    // CONTROLLER IMPLEMENTATION
    /**
     * Controller initialization method
     */
    (function init() {
      addListeners();
      loadData();
    })();

    /**
     * Method to add listeners to notifications
     * Listeners don't need to be cleared because they die with the scope
     */
    function addListeners() {
      $scope.$on(NOTIFICATIONS.MESSAGE.REMOVE, onRemoveMessageHandler);
      $scope.$on(NOTIFICATIONS.MESSAGE.SELECT, onSelectMessageHandler);
    }

    /**
     * Gets the data from the model and update messages list
     */
    function loadData() {
      messagesModel.get()
                   .then(updateMessages);
    }

    /**
     * Select message handler
     * @param {object} evt - Event of the notification
     * @param {object} message - Message to remove
     */
    function onSelectMessageHandler(evt, message) {
      vm.activeMessage = true;
      vm.currentMessage = message;
    }

    /**
     * Remove message handler
     * @param {object} evt - Event of the notification
     * @param {object} message - Message to remove
     */
    function onRemoveMessageHandler(evt, message) {
      messagesModel.remove(message);
      updateMessages();
    }

    /**
     * Update messages list
     */
    function updateMessages() {
      vm.messages = messagesModel.data();
    }
  }

  angular.module('mailbox').controller('messagesController', messagesController);

})(window.angular);
