'use strict';

/* Services */
angular
    .module('myApp.api', [])
    .factory('api', ['$http',
        function ($http) {
            $http.defaults.headers.common.site = '55743d2101fdb1d6a267a345';
            $http.defaults.cache = true;

            var url = 'http://api.publiciti.com.br';

            if (localStorage.getItem('token')) {
                $http.defaults.headers.common.authorization = JSON.parse(localStorage.getItem('token')).conteudo;
            }

            if (localStorage.getItem('site')) {
                $http.defaults.headers.common.site = localStorage.getItem('site');
            }

            return {
                get: function (endpoint) {
                    return $http.get(url + '/' + endpoint);
                },
                post: function (endpoint, data) {
                    return $http.post(url + '/' + endpoint, data);
                },
                put: function (endpoint, data) {
                    return $http.put(url + '/' + endpoint, data);
                },
                delete: function (endpoint) {
                    return $http.delete(url + '/' + endpoint);
                }
            };
        }
    ]);
