'use strict';

angular.module('myApp.empregos', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/empregos', {
                templateUrl: 'modules/empregos/index.html',
                controller: 'EmpregosController'
            })
        ;
    }])

    .controller('EmpregosController', ['$scope', '$routeParams', '$location', 'api',
        function ($scope, $routeParams, $location, api) {
            $scope.curPage = 1;
            $scope.pageSize = 12;

            $scope.editor = function () {
                $('.editor').wysiwyg();
                $('textarea').autosize();
            };

            $scope.load = function () {
                api
                    .get('emprego?page=' + $scope.curPage + '&limit=' + $scope.pageSize)
                    .then(function (result) {
                        $scope.linhas = (result.data);
                    });
            };

            $scope.add = function () {
                api
                    .post('emprego', $scope.emprego)
                    .success(function (data, status) {
                        $scope.status = {
                            type: 'success',
                            message: 'Vaga de emprego inserida com sucesso!'
                        }

                        $scope.emprego = '';
                        $scope.empregoForm.$setPristine();
                    })
                    .error(function (data, status) {
                        $scope.status = {
                            type: 'danger',
                            message: 'Ocorreu um erro ao salvar a vaga'
                        }
                    });
            };

            $scope.delete = function (id) {
                if (confirm('Você deseja realmente apagar a vaga?\nEste procedimento é irreversível!')) {
                    api
                        .delete('emprego/' + id)
                        .then(function (data) {
                            if (data.status == 200) {
                                $scope.status = {
                                    type: 'success',
                                    message: 'Vaga removida com sucesso!'
                                }

                                $location.path('/empregos');

                                $scope.load();
                            } else {
                                $scope.status = {
                                    type: 'danger',
                                    message: 'Erro removendo vaga, tente novamente mais tarde'
                                }
                            }
                        });
                }
            };

            $scope.edit = function () {
                api
                    .put('emprego/' + $routeParams.id, $scope.emprego)
                    .success(function (data) {
                        $scope.status = {
                            type: 'success',
                            message: 'Vaga atualizada com sucesso!'
                        }
                    })
                    .error(function () {
                        $scope.status = {
                            type: 'danger',
                            message: 'Ocorreu um erro atualizando os dados da vaga, tente novamente mais tarde'
                        }
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