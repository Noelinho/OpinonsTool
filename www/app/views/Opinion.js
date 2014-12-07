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
            },

            events: {
                'click #validar-opinion': 'validarOpinion',
                'click #invalidar-opinion': 'invalidarOpinion',
                'click #save-opinion': 'saveOpinion'
            },

            validarOpinion: function(e) {
                e.preventDefault();

                this.model.set('_status', '20');
                this.model.save();
            },
            invalidarOpinion: function(e) {
                e.preventDefault();

                this.model.set('_status', '10');
                this.model.save();
            },
            saveOpinion: function(e) {
                e.preventDefault();

                this.model.set('_mejor', $('#mejor_' + this.model.id).val());
                this.model.set('_peor', $('#peor_' + this.model.id).val());
                this.model.set('_cuerpo', $('#cuerpo_' + this.model.id).val());

                this.model.save();
            }


        });

    return SingleOpinionView;
});