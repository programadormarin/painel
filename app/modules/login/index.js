'use strict';

angular.module('myApp.login', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'modules/login/index.html',
                controller: 'LoginController'
            })
            .when('/logout', {
                templateUrl: 'modules/login/index.html',
                controller: 'LoginController'
            })
        ;
    }])

    .controller('LoginController', ['$scope', '$routeParams', '$location', 'api', '$window', '$interval', function ($scope, $routeParams, $location, $api, $window, $interval) {
        $scope.check = function () {
            $interval(function () {
                if (localStorage.getItem('usuario')) {
                    $scope.logado = true;

                    var usuario = JSON.parse(localStorage.getItem('usuario'));

                    $scope.modulos = usuario.modulos;
                    $scope.usuario = usuario;
                } else {
                    $scope.logado = false;

                    $('#myModal').modal('show');
                }
            }, 100);
        };

        $scope.login = function () {
            $api
                .post('login', $scope.user)
                .success(function (data) {
                    $scope.status = {
                        type: 'success',
                        message: 'Logado com sucesso!'
                    };

                    $scope.user = '';
                    $scope.loginForm.$setPristine();

                    localStorage.setItem('site', data.data.usuario.site._id);
                    localStorage.setItem('usuario', JSON.stringify(data.data.usuario));
                    localStorage.setItem('token', data.data.token.conteudo);

                    $location.url('/inicio');

                    $window.location.reload();
                })
                .error(function () {
                    $scope.status = {
                        type: 'danger',
                        message: 'Usuário/Senha inválidos'
                    };
                });
        };

        $scope.logout = function () {
            localStorage.clear();

            $location.url('/inicio');

            $window.location.reload();
        };
    }]);