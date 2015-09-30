'use strict';

angular
    .module('ngApi', [])
    .factory('api', ['$http',
        function ($http) {
            $http.defaults.cache = true;

            var url     = 'https://grupo-publiciti.rhcloud.com/';
            var config  = {
                headers: $http.defaults.headers
            };

            if (localStorage.getItem('token')) {
                config.headers.authorization = localStorage.getItem('token');
            }

            if (localStorage.getItem('site')) {
                config.headers.site = localStorage.getItem('site');
            }

            return {
                get: function (endpoint) {
                    return $http.get(url + '/' + endpoint, config);
                },
                post: function (endpoint, data) {
                    return $http.post(url + '/' + endpoint, data, config);
                },
                put: function (endpoint, data) {
                    return $http.put(url + '/' + endpoint, data, config);
                },
                delete: function (endpoint) {
                    return $http.delete(url + '/' + endpoint, config);
                }
            };
        }
    ]);
