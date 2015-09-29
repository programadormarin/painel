'use strict';

angular.module('myApp.sites', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/sites', {
                templateUrl: 'modules/sites/index.html',
                controller: 'SitesController'
            })
            .when('/sites/editar/:id', {
                templateUrl: 'modules/sites/edit.html',
                controller: 'SitesController'
            })
            .when('/sites/adicionar', {
                templateUrl: 'modules/sites/add.html',
                controller: 'SitesController'
            })
        ;
    }])

    .controller('SitesController', ['$scope', '$routeParams', 'api', '$window', '$location', function ($scope, $routeParams, api, $window, $location) {
        $scope.curPage = 1;
        $scope.pageSize = 12;

        $scope.load = function () {
            api
                .get('site?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                .then(function (result) {
                    $scope.linhas = (result.data);
                });
        };

        $scope.add = function () {
            api
                .post('site', $scope.site)
                .then(function (data, status) {
                    $scope.status = {
                        type: 'success',
                        message: 'inserido com sucesso!'
                    };

                    $scope.site = '';
                    $scope.siteForm.$setPristine();
                });
        };

        $scope.delete = function (id) {
            if (confirm('Você deseja realmente apagar o ítem?\nEste procedimento é irreversível!')) {
                api
                    .delete('site/' + id)
                    .then(function (data) {
                        if (data.status == 204) {
                            $scope.status = {
                                type: 'success',
                                message: 'removida com sucesso!'
                            };

                            $location.path('/sites');
                            $scope.load();
                        } else {
                            $scope.status = {
                                type: 'danger',
                                message: 'Erro removendo, tente novamente mais tarde'
                            };
                        }
                    });
            }
        };

        $scope.update = function () {
            api
                .put('site/' + $routeParams.id, $scope.site)
                .success(function (data) {
                    $scope.status = {
                        type: 'success',
                        message: 'atualizada com sucesso!'
                    };
                })
                .error(function () {
                    $scope.status = {
                        type: 'danger',
                        message: 'Ocorreu um erro atualizando, tente novamente mais tarde'
                    };
                });
        };

        $scope.get = function () {
            api
                .get('site/' + $routeParams.id)
                .then(function (data) {
                    $scope.site = data.data.data;
                });
        };

        $scope.login = function ($site) {
            localStorage.setItem('site', $site._id);

            $scope.status = {
                type: 'success',
                message: 'Site alterado para ' + $site.nome
            };
        };
    }]);