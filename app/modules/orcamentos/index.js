'use strict';

angular.module('myApp.orcamentos', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/orcamentos', {
                templateUrl: 'modules/orcamentos/index.html',
                controller: 'OrcamentosController'
            })
        ;
    }])

    .controller('OrcamentosController', ['$scope', '$routeParams', '$location', 'api',
        function ($scope, $routeParams, $location, api) {
            $scope.curPage = 1;
            $scope.pageSize = 12;

            $scope.load = function () {
                api
                    .get('orcamento?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                    .then(function (result) {
                        $scope.linhas = (result.data);
                    });
            };

            $scope.add = function () {
                api
                    .post('orcamento', $scope.orcamento)
                    .then(function (data, status) {
                        $scope.status = {
                            type: 'success',
                            message: 'Orçamento inserido com sucesso!'
                        }

                        $scope.orcamento = '';
                        $scope.orcamentoForm.$setPristine();
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o orçamento?\nEste procedimento é irreversível!')) {
                    api
                        .delete('orcamento/' + id)
                        .then(function (data) {
                            if (data.status == 200) {
                                $scope.status = {
                                    type: 'success',
                                    message: 'Orçamento removido com sucesso!'
                                }

                                $location.path('/orcamentos');
                                $scope.load();
                            } else {
                                $scope.status = {
                                    type: 'error',
                                    message: 'Erro removendo orçamento, tente novamente mais tarde'
                                }
                            }
                        });
                }
            };

            $scope.edit = function () {
                api
                    .put('orcamento/' + $routeParams.id, $scope.orcamento)
                    .success(function (data) {
                        $scope.status = {
                            type: 'success',
                            message: 'Orçamento atualizado com sucesso!'
                        }
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'error',
                            message: 'Ocorreu um erro atualizando os dados do orçamento, tente novamente mais tarde'
                        }
                    });
            };

            $scope.get = function () {
                api
                    .get('orcamento/' + $routeParams.id).then(function (data) {
                        $scope.orcamento = (data.data.data);
                    });

                new dgCidadesEstados({
                    cidade: document.getElementById('cidade'),
                    estado: document.getElementById('estado'),
                    change: true
                });
            }
        }
    ]);