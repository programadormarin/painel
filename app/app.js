'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [
        'ngRoute',
        'ngLoadingSpinner',
        'angular-loading-bar',
        'angular-cloudinary',
        'ui.utils.masks',
        'myApp.aviso',
        'myApp.empregos',
        'myApp.empresa',
        'myApp.equipe',
        'myApp.inicio',
        'myApp.login',
        'myApp.parceiros',
        'myApp.produtos',
        'myApp.slides'
    ])

    .config(['$routeProvider', 'cloudinaryProvider', '$httpProvider', function ($route, $cloud, $http) {
        var $usuario = localStorage.getItem('usuario');

        if ($usuario) {
            var $config = (JSON.parse($usuario)).site.config.cloudinary;

            $cloud.config($config);
        }

        $route.otherwise({redirectTo: '/inicio'});

        $http.defaults.cache = false;
    }])
;
