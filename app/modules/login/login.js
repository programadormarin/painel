'use strict';

/* Controllers */
angular.module('panel.controllers.login', [])

    .controller('Login', ['$scope', '$routeParams', '$location', 'api',
        function ($scope, $routeParams, $location, api) {
            $scope.load = function () {
                $('#main-menu-toggle').click();
            };

            $scope.login = function () {
                api
                    .post('login', $scope.user)
                    .success(function (data, status) {
                        $scope.status = {
                            type: 'success',
                            message: 'Logado com sucesso!'
                        }

                        $scope.user = '';
                        $scope.loginForm.$setPristine();

                        $('#main-menu-toggle').click();

                        localStorage.setItem('site', data.site._id);
                        localStorage.setItem('usuario', JSON.stringify(data));

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
        }
    ]);