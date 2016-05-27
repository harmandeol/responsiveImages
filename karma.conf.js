
module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['mocha'],
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/chai/chai.js',
            'node_modules/sinon/pkg/sinon.js',
            'app/**/*.js',
            'test/**/*.js'
        ],

        // list of files to exclude
        exclude: [],
        preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true
    });
};