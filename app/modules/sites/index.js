'use strict';

angular.module('myApp.sites', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/sites', {
                templateUrl: 'modules/sites/index.html',
                controller: 'SitesController'
            })
        ;
    }])

    .controller('SitesController', ['$scope', function ($scope) {
            $scope.curPage = 1;
            $scope.pageSize = 12;
                
            $scope.editor = function () {
                $('.editor').wysiwyg();
                $('textarea').autosize();
                $('.datepicker').datepicker({
                    format: 'dd-mm-yyyy'
                });
            };

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
                        }

                        $scope.aviso = '';
                        $scope.avisoForm.$setPristine();
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar o ítem?\nEste procedimento é irreversível!')) {
                    api
                        .delete('aviso/' + id)
                        .then(function (data) {
                            if (data.status == 200) {
                                $scope.status = {
                                    type: 'success',
                                    message: 'removida com sucesso!'
                                }

                                $location.path('/aviso');
                                $scope.load();
                            } else {
                                $scope.status = {
                                    type: 'error',
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
                            type: 'error',
                            message: 'Ocorreu um erro atualizando, tente novamente mais tarde'
                        }
                    });
            };

            $scope.get = function () {
                api
                    .get('aviso/' + $routeParams.id)
                    .then(function (data) {
                        $scope.aviso = (data.data);
                    });
            }
        }
    ]);