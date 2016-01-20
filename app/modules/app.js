'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [
        'ngRoute',
        'ngSanitize',
        'angular-lightweight-markdown-editor',
        'ngLoadingSpinner',
        'angular-loading-bar',
        'ui.utils.masks',
        'myApp.aviso',
        'myApp.empregos',
        'myApp.empresa',
        'myApp.equipe',
        'myApp.inicio',
        'myApp.login',
        'myApp.parceiros',
        'myApp.produtos',
        'myApp.slides',
        'myApp.carrinhos'
    ])

    .config(['$routeProvider', '$httpProvider', function ($route, $http) {
        $route.otherwise({redirectTo: '/inicio'});

        $http.defaults.cache = false;

        if (localStorage.getItem('site')) {
            $http.defaults.headers.common.site = JSON.parse(localStorage.getItem('site'))._id;
        }

        if (localStorage.getItem('token')) {
            $http.defaults.headers.common.authorization = localStorage.getItem('token');
        }
    }])
;
