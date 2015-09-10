'use strict';

/* Controllers */
angular
    .module('panel.controllers.curriculos', [])

    .controller('Curriculos', ['$scope', '$routeParams', '$location', 'api',
        function ($scope, $routeParams, $location, api) {
            $scope.curPage = 1;
            $scope.pageSize = 12;

            $scope.load = function () {
                api
                    .get('curriculo?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                    .then(function (result) {
                        $scope.linhas = (result.data);
                    });
            };

            $scope.add = function () {
                api
                    .post('curriculo', $scope.curriculo)
                    .then(function (data, status) {
                        $scope.status = {
                            type: 'success',
                            message: 'Currículo inserido com sucesso!'
                        }

                        $scope.curriculo = '';
                        $scope.curriculoForm.$setPristine();
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o cliente?\nEste procedimento é irreversível!')) {
                    api
                        .delete('curriculo/' + id)
                        .then(function (data) {
                            if (data.status == 200) {
                                $scope.status = {
                                    type: 'success',
                                    message: 'Currículo removido com sucesso!'
                                }

                                $location.path('/curriculos');
                                $scope.load();
                            } else {
                                $scope.status = {
                                    type: 'error',
                                    message: 'Erro removendo cliente, tente novamente mais tarde'
                                }
                            }
                        });
                }
            };

            $scope.edit = function () {
                api
                    .put('curriculo/' + $routeParams.id, $scope.curriculo)
                    .success(function (data) {
                        $scope.status = {
                            type: 'success',
                            message: 'Currículo atualizado com sucesso!'
                        }
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'error',
                            message: 'Ocorreu um erro atualizando os dados do currículo, tente novamente mais tarde'
                        }
                    });
            };

            $scope.get = function () {
                api
                    .get('curriculo/' + $routeParams.id)
                    .then(function (data) {
                        $scope.curriculo = (data.data);
                    });
            };
        }
    ]);
