module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'public/bower/angular/angular.js',
      'public/bower/angular-ui-router/release/angular-ui-router.min.js',
      'public/bower/angular-mocks/angular-mocks.js',
      'public/javascripts/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
