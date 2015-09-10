'use strict';

/* Controllers */
angular
    .module('panel.controllers.upload', ['angularFileUpload'])

    .controller('Upload', ['$scope', '$routeParams', '$location', 'api', 'FileUploader', '$route',
        function ($scope, $routeParams, $location, api, FileUploader, $route) {
            $scope.onFileSelect = function ($files) {
                for (var i = 0; i < $files.length; i++) {
                    var file = $files[i];

                    $scope.upload = $upload.upload({
                        url: '/api/upload',
                        data: {
                            myObj: $scope.slide
                        },
                        file: file, // or list of files ($files) for html5 only
                    }).progress(function (evt) {
                        var porcentagem = parseInt(100.0 * evt.loaded / evt.total);
                        $scope.status = {
                            type: 'info',
                            message: porcentagem + '% enviados....'
                        }

                        console.log('percent: ' + porcentagem);
                    }).success(function (data, status, headers, config) {
                        if (data.http_code == 400) {
                            $scope.status = {
                                type: 'danger',
                                message: data.message
                            }

                            return false;
                        }

                        $scope.status = {
                            type: 'info',
                            message: 'Imagem enviada com sucesso, você pode salvar agora'
                        }

                        $scope.slide.imagem = JSON.stringify(data);
                    });
                }
            };
        }
    ]);
