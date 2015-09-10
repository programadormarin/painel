'use strict';

/* Controllers */
angular
    .module('panel.controllers.contato', [])

    .controller('Contato', ['$scope', '$routeParams', '$location', 'api',
        function ($scope, $routeParams, $location, api) {
            $scope.curPage = 1;
            $scope.pageSize = 12;
                
            $scope.load = function () {
                api
                    .get('contato?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                    .then(function (result) {
                        $scope.linhas = (result.data);
                    });
            };

            $scope.add = function () {
                api
                    .post('contato', $scope.contato)
                    .then(function (data, status) {
                        $scope.status = {
                            type: 'success',
                            message: 'contato inserido com sucesso!'
                        }

                        $scope.slide = '';
                        $scope.contatoForm.$setPristine();
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o contato?\nEste procedimento é irreversível!')) {
                    api
                        .delete('contato/' + id)
                        .then(function (data) {
                            if (data.status == 200) {
                                $scope.status = {
                                    type: 'success',
                                    message: 'contato removido com sucesso!'
                                }

                                $location.path('/contatos');
                                $scope.load();
                            } else {
                                $scope.status = {
                                    type: 'danger',
                                    message: 'Erro removendo contato, tente novamente mais tarde'
                                }
                            }
                        });
                }
            };

            $scope.edit = function () {
                api
                put('contato/' + $routeParams.id, $scope.contato)
                    .success(function (data) {
                        $scope.status = {
                            type: 'success',
                            message: 'contato atualizado com sucesso!'
                        }
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'danger',
                            message: 'Ocorreu um erro atualizando os dados do contato, tente novamente mais tarde'
                        }
                    });
            };

            $scope.get = function () {
                api
                    .get('contato/' + $routeParams.id)
                    .then(function (data) {
                        $scope.contato = (data.data);
                    });
            };
        }
    ]);
