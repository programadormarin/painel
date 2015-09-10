module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/vendor/angular/angular.js',
            'app/vendor/angular-loader/angular-loader.js',
            'app/vendor/angular-mocks/angular-mocks.js',
            'app/vendor/angular-route/angular-route.js',
            'app/vendor/jquery/dist/jquery.js',
            'app/vendor/bootstrap/dist/js/bootstrap.js',
            'app/components/**/*.js',
            'app/modules/**/*.js',
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
