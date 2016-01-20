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
    $scope.pageTitle = 'Painel de Controle';

    /**
     * Efetua checagem de estado de autenticação
     */
    $scope.check = function () {
        $interval(function () {
            if (localStorage.getItem('token')) {
                $('nav').removeClass('hidden').show();

                $scope.usuario  = JSON.parse(localStorage.getItem('usuario'));
                $scope.site     = JSON.parse(localStorage.getItem('site'));

                return;
            }

            $('nav').hide();

            return $location.url('/login');
        }, 100);
    };

    /**
     * Autentica na API e recupera um token de acesso
     */
    $scope.login = function () {
        $http
            .post($('meta[name="api"]').attr('content') + 'login', $scope.user, {headers: { site: $scope.user.site }})
            .success(function (data) {
                localStorage.setItem('site',  JSON.stringify(data.data.site));
                localStorage.setItem('token', data.data.token.conteudo);
                localStorage.setItem('usuario', JSON.stringify(data.data.usuario));

                delete $scope.status;

                $window.location.reload();

                $location.url('/inicio');
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

        delete $scope.usuario;
        delete $scope.site;
        delete $scope.status;

        $location.url('/login');
    };
}

angular
    .module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'modules/login/index.html',
                controller: 'LoginController'
            })
        ;
    }])

    .controller('LoginController', ['$scope', '$location', '$http', '$interval', '$window', LoginController]);