'use strict';

/**
 * Autenticação
 *
 * @param $scope
 * @param $location
 * @param $http
 * @param $interval
 *
 * @constructor
 */
function LoginController ($scope, $location, $http, $interval) {
    /**
     * Efetua checagem de estado de autenticação
     */
    $scope.check = function () {
        $interval(function () {
            if (localStorage.getItem('token')) {
                $('#myModal').modal('hide');

                return;
            }

            $('#myModal').modal('show');
        }, 100);
    };

    /**
     * Autentica na API e recupera um token de acesso
     */
    $scope.login = function () {
        $http
            .post($('meta[name="api"]').attr('content') + 'login', $scope.user, {headers: { site: '55743d2101fdb1d6a267a345' }})
            .success(function (data) {
                localStorage.setItem('site',  data.data.usuario.site._id);
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

    .controller('LoginController', ['$scope', '$location', '$http', '$interval', LoginController]);