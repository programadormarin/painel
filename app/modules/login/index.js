'use strict';

angular.module('myApp.login', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'modules/login/index.html',
                controller: 'LoginController'
            })
        ;
    }])

    .controller('LoginController', ['$scope', '$routeParams', '$location', 'api', function ($scope, $routeParams, $location, api) {
        $scope.login = function () {
            api
                .post('login', $scope.user)
                .success(function (data, status) {
                    $scope.status = {
                        type: 'success',
                        message: 'Logado com sucesso!'
                    };

                    $scope.user = '';
                    $scope.loginForm.$setPristine();

                    localStorage.setItem('site', data.data.usuario.site._id);
                    localStorage.setItem('usuario', JSON.stringify(data.data.usuario));
                    localStorage.setItem('token', JSON.stringify(data.data.token));

                    $location.url('/inicio');
                })
                .error(function (data, status) {
                    $scope.status = {
                        type: 'danger',
                        message: 'Usuário/Senha inválidos'
                    }
                });
        };

        $scope.logout = function () {
            localStorage.clear();

            $location.url('/login');
        };
    }]);