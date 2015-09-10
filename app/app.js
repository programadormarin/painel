'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngApi',
    'myApp.aviso',
    'myApp.clientes',
    'myApp.curriculos',
    'myApp.empregos',
    'myApp.empresa',
    'myApp.equipe',
    'myApp.inicio',
    'myApp.login',
    'myApp.orcamentos',
    'myApp.parceiros',
    'myApp.produtos',
    'myApp.sites',
    'myApp.slides',
    'myApp.usuarios',
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/inicio'});
    }]);
