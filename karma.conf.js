module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/spin.js/spin.js',
            'bower_components/angular-loader/angular-loader.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-loading-bar/build/loading-bar.min.js',
            'bower_components/angular-spinner/angular-spinner.min.js',
            'bower_components/angular-loading-spinner/angular-loading-spinner.js',
            'bower_components/ng-file-upload/ng-file-upload.js',
            'bower_components/ng-notify/dist/ng-notify.min.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'app/modules/**/*.js',
            'tests/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
