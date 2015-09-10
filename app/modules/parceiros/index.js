'use strict';

angular.module('myApp.parceiros', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/parceiros', {
                templateUrl: 'modules/parceiros/index.html',
                controller: 'ParceirosController'
            })
        ;
    }])

    .controller('ParceirosController', ['$scope', '$routeParams', '$location', 'api',
        function ($scope, $routeParams, $location, api) {
            $scope.curPage = 1;
            $scope.pageSize = 12;

            $scope.editor = function () {
                $('.editor').wysiwyg();
                $('textarea').autosize();
            };

            $scope.load = function () {
                api
                    .get('parceiro?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                    .then(function (data) {
                        $scope.linhas = (data.data);
                    });
            };

            $scope.add = function () {
                api
                    .post('parceiro', $scope.parceiro)
                    .then(function (data, status) {
                        $scope.status = {
                            type: 'success',
                            message: 'Parceiro inserido com sucesso!'
                        }

                        $scope.parceiro = '';
                        $scope.parceiroForm.$setPristine();
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o parceiro?\nEste procedimento é irreversível!')) {
                    api
                        .delete('parceiro/' + id)
                        .then(function (data) {
                            if (data.status == 200) {
                                $scope.status = {
                                    type: 'success',
                                    message: 'Parceiro removido com sucesso!'
                                }

                                $location.path('/parceiros');
                                $scope.load();
                            } else {
                                $scope.status = {
                                    type: 'error',
                                    message: 'Erro removendo parceiro, tente novamente mais tarde'
                                }
                            }
                        });
                }
            };

            $scope.edit = function () {
                api
                    .put('parceiro/' + $routeParams.id, $scope.parceiro)
                    .success(function (data) {
                        $scope.status = {
                            type: 'success',
                            message: 'Parceiro atualizado com sucesso!'
                        }
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'error',
                            message: 'Ocorreu um erro atualizando os dados do parceiro, tente novamente mais tarde'
                        }
                    });
            };

            $scope.get = function () {
                api
                    .get('parceiro/' + $routeParams.id)
                    .then(function (data) {
                        $scope.parceiro = (data.data);
                    });
            };
        }
    ]);