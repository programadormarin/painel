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

                $('.container-fluid').removeClass('hidden').show();
                $('nav').removeClass('hidden').show();

                return;
            }

            $('#myModal').modal('show');
            $('.container-fluid').hide();
            $('nav').hide();
        }, 100);
    };

    /**
     * Autentica na API e recupera um token de acesso
     */
    $scope.login = function () {
        $http
            .post($('meta[name="api"]').attr('content') + 'login', $scope.user, {headers: { site: '55743d2101fdb1d6a267a345' }})
            .success(function (data) {
                localStorage.setItem('site',  data.data.site._id);
                localStorage.setItem('token', data.data.token.conteudo);
                localStorage.setItem('usuario', data.data.usuario);

                delete $scope.status;

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