module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'app/vendor/jquery/dist/jquery.js',
            'app/vendor/bootstrap/dist/js/bootstrap.js',
            'app/vendor/angular/angular.js',
            'app/vendor/angular-loader/angular-loader.js',
            'app/vendor/angular-mocks/angular-mocks.js',
            'app/vendor/angular-route/angular-route.js',
            'app/vendor/ng-file-upload/ng-file-upload-shim.js',
            'app/vendor/ng-file-upload/ng-file-upload.js',
            'app/vendor/angular-cloudinary/angular-cloudinary.js',
            'app/components/api.js',
            'app/components/input-type-file.js',
            'app/modules/**/*.js',
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],
        junitReporter: {
            outputFile: 'unit.xml',
            suite: 'unit'
        }
    });
};