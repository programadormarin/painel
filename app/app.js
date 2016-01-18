'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [
        'ngRoute',
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

    .directive('file', function () {
        return {
            scope: {
                file: '='
            },
            link: function (scope, el, attrs) {
                el.bind('change', function (event) {
                    var file = event.target.files[0];
                    scope.file = file ? file : undefined;
                    scope.$apply();
                });
            }
        };
    })

    .config(['$routeProvider', '$httpProvider', function ($route, $http) {
        $route.otherwise({redirectTo: '/inicio'});

        $http.defaults.cache = false;
    }])
;
