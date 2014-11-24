define([
    'jquery',
    'underscore',
    'backbone',
    'router.js'
], function($, _, Backbone, Router){
    var mthis = this;

    var initialize = function(){
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    }

    return {
        initialize: initialize
    };
});