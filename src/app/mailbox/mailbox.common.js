(function(angular) {
  'use strict';

  function mailboxCommon($filter, SETTINGS) {

    /**
     * Format a date for a given format
     * @param {number} date - The original date
     * @param {format} string - Date format
     */
    function formatDate(date, format) {
      format = format || SETTINGS.FORMAT.DATE;
      return $filter('date')(date, format, SETTINGS.TIMEZONE);
    }

    // EXPOSED METHODS
    return {
      formatDate: formatDate
    };

  }

  angular.module('mailbox').factory('mailboxCommon', mailboxCommon);

})(window.angular);
