'use strict';

angular.module('myApp.inicio', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/inicio', {
                templateUrl: 'modules/inicio/index.html',
                controller: 'InicioController'
            })
        ;
    }])

    .controller('InicioController', [function () {

    }]);