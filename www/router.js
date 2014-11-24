define([
    'underscore',
    'backbone',
    'app/collections/Opinions',
    'app/views/ListOpinions'
], function(_, Backbone, OpinionsCollection, ListOpinions) {
    var Router = Backbone.Router.extend({
        routes: {
            "course/:id" : "getOpinions"
        },

        getOpinions: function(id) {
            var opinionsCollection = new OpinionsCollection([], {course: id});
            opinionsCollection.fetch({
                success: function() {
                    var appView = new ListOpinions({el:$('#opinionsApp'), collection: opinionsCollection});
                },
                error: function() {
                    alert('error');
                }
            });
        }
    });

    var initialize = function() {
       var app_router = new Router;

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});