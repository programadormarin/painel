'use strict';

/**
 * Autenticação
 *
 * @param $scope
 * @param $routeParams
 * @param $location
 * @param $http
 * @param $window
 * @param $interval
 *
 * @constructor
 */
function LoginController ($scope, $routeParams, $location, $http, $window, $interval) {
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
        $http
            .post($('meta[name="api"]').attr('content') + 'login', $scope.user)
            .success(function (data) {
                $scope.status = {
                    type: 'success',
                    message: 'Logado com sucesso!'
                };

                $scope.user = '';
                $scope.loginForm.$setPristine();

                $('#myModal').modal('hide');

                delete $scope.status;

                localStorage.setItem('site', data.data.usuario.site._id);
                localStorage.setItem('usuario', JSON.stringify(data.data.usuario));
                localStorage.setItem('token', data.data.token.conteudo);

                $location.url('/inicio');
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
    };
}

angular
    .module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        // :)
    }])

    .controller('LoginController', ['$scope', '$routeParams', '$location', '$http', '$window', '$interval', LoginController]);