'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [
        'ngRoute',
        'ngApi',
        'ngInputTypeFile',
        'angular-cloudinary',
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
        'myApp.slides'
    ])
    .config(['$routeProvider', 'cloudinaryProvider', function ($routeProvider, cloudinaryProvider) {
        var $usuario = localStorage.getItem('usuario');

        if ($usuario) {
            var $config = (JSON.parse($usuario)).site.config.cloudinary;

            cloudinaryProvider.config($config);
        }

        $routeProvider.otherwise({redirectTo: '/inicio'});
    }]);
