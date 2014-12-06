define([
    'jquery',
    'underscore',
    'backbone',
    'router.js'
], function($, _, Backbone, Router){
    var mthis = this;
    var router;

    var initialize = function(){
        // Pass in our Router module and call it's initialize function
        router = new Router;

        Backbone.history.start();
    }

    $('#searchByCourse').on("click", function(e){
        e.preventDefault();
        $('#opinionsApp').html('');
        router.navigate('course/' + $('#course-to-search').val(), {trigger:true});
    });

    return {
        initialize: initialize
    };
});