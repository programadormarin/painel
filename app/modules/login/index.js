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
function LoginController ($scope, $location, $http, $interval, $window) {
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
            .post($('meta[name="api"]').attr('content') + 'login', $scope.user, {headers: { site: $scope.site }})
            .success(function (data) {
                localStorage.setItem('site',  JSON.stringify(data.data.site));
                localStorage.setItem('token', data.data.token.conteudo);
                localStorage.setItem('usuario', JSON.stringify(data.data.usuario));

                delete $scope.status;

                $window.location.reload();
            })
            .error(function () {
                $scope.status = {
                    type: 'danger',
                    message: 'Usuário/Senha inválidos'
                };
            });
    };

    /**
     * Logoff da applicação
     *
     */
    $scope.logout = function () {
        localStorage.clear();

        $window.location.reload();
    };
}

angular
    .module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        // :)
    }])

    .controller('LoginController', ['$scope', '$location', '$http', '$interval', '$window', LoginController]);