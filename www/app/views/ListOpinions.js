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
            'click #validar-opinion': 'validarOpinion',
            'click #invalidar-opinion': 'invalidarOpinion',
            'click #save-opinion': 'saveOpinion'
        },

        validarOpinion: function(e) {
            e.preventDefault();
            var idOpinion = $(e.target).data('idopinion');

            var model = this.collection.get(idOpinion);
            model.set('_status', '20');
            this.saveReview(model);
        },
        invalidarOpinion: function(e) {
            e.preventDefault();
            var idOpinion = $(e.target).data('idopinion');

            var model = this.collection.get(idOpinion);
            model.set('_status', '10');
            this.saveReview(model);
            //model.save();
        },
        saveOpinion: function(e) {
            e.preventDefault();
            var idOpinion = $(e.target).data('idopinion');

            var model = this.collection.get(idOpinion);
            model.set('_mejor', $('#mejor_' + idOpinion).val());
            model.set('_peor', $('#peor_' + idOpinion).val());
            model.set('_cuerpo', $('#cuerpo_' + idOpinion).val());
            this.saveReview(model);
            //model.save();
        },
        saveReview: function(model) {
            var data = {'model':JSON.stringify(model)};

            Backbone.ajax({
                dataType: "json",
                url: "http://api.emagister.com.devel/api/reviews/save",
                type: "POST",
                data: data,
                success: function(val) {
                    alert('success');
                }
            });
        }

    });



    return ListOpinionesView;
});