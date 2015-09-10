'use strict';

/* Controllers */
angular
    .module('panel.controllers.clientes', [])

    .controller('Clientes', ['$scope', '$routeParams', '$location', 'api',
        function ($scope, $routeParams, $location, api) {
            $scope.curPage = 1;
            $scope.pageSize = 12;
            
            $scope.editor = function () {
                $('.editor').wysiwyg();
                $('textarea').autosize();
            };

            $scope.load = function () {
                api
                    .get('cliente?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                    .then(function (result) {
                        $scope.linhas = (result.data);
                    });
            };

            $scope.add = function () {
                api
                    .post('cliente', $scope.cliente)
                    .then(function (data, status) {
                        $scope.status = {
                            type: 'success',
                            message: 'Cliente inserido com sucesso!'
                        }

                        $scope.cliente = '';
                        $scope.clienteForm.$setPristine();
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o cliente?\nEste procedimento é irreversível!')) {
                    api
                        .delete('cliente/' + id)
                        .then(function (data) {
                            if (data.status == 200) {
                                $scope.status = {
                                    type: 'success',
                                    message: 'Cliente removido com sucesso!'
                                }

                                $location.path('/clientes');
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
                    .put('cliente/' + $routeParams.id, $scope.cliente)
                    .success(function (data) {
                        $scope.status = {
                            type: 'success',
                            message: 'Cliente atualizado com sucesso!'
                        }
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'error',
                            message: 'Ocorreu um erro atualizando os dados do cliente, tente novamente mais tarde'
                        }
                    });
            };

            $scope.get = function () {
                api
                    .get('cliente/' + $routeParams.id)
                    .then(function (data) {
                        $scope.cliente = (data.data);
                    });
            }
        }
    ]);
