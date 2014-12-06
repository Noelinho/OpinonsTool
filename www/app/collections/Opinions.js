define([
    'underscore',
    'backbone',
    'app/models/Opinion'
], function(_, Backbone, Opinion) {
    var OpinionsCollection = Backbone.Collection.extend({
        model: Opinion,
        originalCollection: '',
        initialize: function(models, options) {
            options || (options = {});
            this.course = options.course;
        },
        url: function() {
            return 'http://api.emagister.com.devel/api/reviews/get-by-course/course/' + this.course;
        },
        setOriginalCollection: function(collection) {
            this.originalCollection = collection;
        }
    });

    return OpinionsCollection;
});