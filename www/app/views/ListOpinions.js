define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/Opinion'
], function($, _, Backbone, SingleOpinionView) {
    var ListOpinionesView = Backbone.View.extend({
        initialize: function() {
          this.render();
        },
        render: function() {
            var el = $(this.el);
            this.collection.each(function (model) {
                var singleOpinon = new SingleOpinionView({model:model});
                el.append(singleOpinon.render().el);
            });
        },
        events: {
            'click #validar-opinion': 'validarOpinion'
        },

    validarOpinion: function(e) {
            e.preventDefault();
            var idOpinion = $(e.target).data('idopinion');

            var model = this.collection.get(idOpinion);
            model.set('_status', 'Estado validado');
        }

    });

    return ListOpinionesView;
});