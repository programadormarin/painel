'use strict';

angular.module('myApp.empregos', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/empregos', {
                templateUrl: 'modules/empregos/index.html',
                controller: 'EmpregosController'
            })
            .when('/empregos/adicionar', {
                templateUrl: 'modules/empregos/add.html',
                controller: 'EmpregosController'
            })
            .when('/empregos/editar/:id', {
                templateUrl: 'modules/empregos/edit.html',
                controller: 'EmpregosController'
            })
        ;
    }])

    .controller('EmpregosController', ['$scope', '$routeParams', '$location', 'api', function ($scope, $routeParams, $location, api) {
            $scope.curPage  = 1;
            $scope.pageSize = 12;

            $scope.load = function () {
                api
                    .get('emprego?page=' + $scope.curPage + '&limit=' + $scope.pageSize + '&t=' + new Date())
                    .then(function (result) {
                        $scope.linhas = (result.data);
                    });
            };

            $scope.add = function () {
                api
                    .post('emprego', $scope.emprego)
                    .success(function () {
                        $location.url('/empregos');
                        $scope.load();
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'danger',
                            message: 'Ocorreu um erro ao salvar a vaga'
                        }
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar a vaga?\nEste procedimento é irreversível!')) {
                    var toDelete = $scope.linhas.data[id];

                    api
                        .delete('emprego/' + toDelete._id)
                        .success(function (data) {
                            $scope.status = {
                                type: 'success',
                                message: 'Vaga removida com sucesso!'
                            };

                            $scope.linhas.data.splice(id, 1);
                        })
                        .error(function() {
                            $scope.status = {
                                type: 'danger',
                                message: 'Erro removendo vaga, tente novamente mais tarde'
                            };
                        });
                }
            };

            $scope.edit = function () {
                api
                    .put('emprego/' + $routeParams.id, $scope.emprego)
                    .success(function () {
                        $scope.status = {
                            type: 'success',
                            message: 'Vaga atualizada com sucesso!'
                        };
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'danger',
                            message: 'Ocorreu um erro atualizando os dados da vaga, tente novamente mais tarde'
                        };
                    });
            };

            $scope.get = function () {
                api
                    .get('emprego/' + $routeParams.id)
                    .then(function (data) {
                        $scope.emprego = (data.data.data);
                    });
            }
        }
    ]);