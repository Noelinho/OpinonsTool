requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        jquery: 'jquery/dist/jquery',
        underscore: 'underscore/underscore',
        backbone: 'backbone/backbone'
    }
});

requirejs(['app'], function(App) {
    App.initialize();
});