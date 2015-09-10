'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.api',
    'myApp.inicio',
    'myApp.sites',
    'myApp.usuarios',
    'myApp.login',
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/inicio'});
    }]);
