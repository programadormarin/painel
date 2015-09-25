'use strict';

angular.module('myApp.aviso', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/aviso', {
                templateUrl: 'modules/aviso/index.html',
                controller: 'AvisoController'
            })
            .when('/aviso/adicionar', {
                templateUrl: 'modules/aviso/add.html',
                controller: 'AvisoController'
            })
            .when('/aviso/editar/:id', {
                templateUrl: 'modules/aviso/edit.html',
                controller: 'AvisoController'
            })
        ;
    }])

    .controller('AvisoController', ['$scope', '$routeParams', '$location', 'api',
        function ($scope, $routeParams, $location, api) {
            $scope.curPage = 1;
            $scope.pageSize = 12;

            $scope.load = function () {
                api
                    .get('aviso?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                    .then(function (result) {
                        $scope.linhas = (result.data);
                    });
            };

            $scope.add = function () {
                api
                    .post('aviso', $scope.aviso)
                    .then(function (data, status) {
                        $scope.status = {
                            type: 'success',
                            message: 'inserida com sucesso!'
                        };

                        $scope.aviso = '';
                        $scope.avisoForm.$setPristine();
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o ítem?\nEste procedimento é irreversível!')) {
                    api
                        .delete('aviso/' + id)
                        .then(function (data) {
                            if (data.status == 204) {
                                $scope.status = {
                                    type: 'success',
                                    message: 'removida com sucesso!'
                                }

                                $location.path('/aviso');

                                $scope.load();
                            } else {
                                $scope.status = {
                                    type: 'danger',
                                    message: 'Erro removendo, tente novamente mais tarde'
                                }
                            }
                        });
                }
            };

            $scope.edit = function () {
                api
                    .put('aviso/' + $routeParams.id, $scope.aviso)
                    .success(function (data) {
                        $scope.status = {
                            type: 'success',
                            message: 'atualizada com sucesso!'
                        }
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'danger',
                            message: 'Ocorreu um erro atualizando, tente novamente mais tarde'
                        }
                    });
            };

            $scope.get = function () {
                api
                    .get('aviso/' + $routeParams.id)
                    .then(function (data) {
                        data.data.data.inicio = new Date(data.data.data.inicio);
                        data.data.data.fim = new Date(data.data.data.fim);

                        $scope.aviso = (data.data.data);
                    });
            }
        }
    ]);