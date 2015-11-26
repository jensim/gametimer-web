'use strict';

angular.module('gametimerApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


