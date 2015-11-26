 'use strict';

angular.module('gametimerApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-gametimerApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-gametimerApp-params')});
                }
                return response;
            }
        };
    });
