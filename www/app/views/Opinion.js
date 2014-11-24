define([
    'jquery',
    'underscore',
    'backbone',
    'app/models/Opinion'
], function($, _, Backbone, Opinion) {
        var SingleOpinionView = Backbone.View.extend({
            template: _.template($("#template-main").html()),

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));

                return this;
            },

            initialize: function() {
                this.listenTo(this.model, 'change', this.render);
            }


        });

    return SingleOpinionView;
});