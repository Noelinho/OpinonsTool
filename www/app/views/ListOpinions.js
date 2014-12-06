define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/Opinion'
], function($, _, Backbone, SingleOpinionView) {
    var ListOpinionesView = Backbone.View.extend({
        filter: null,
        baseCollection: null,

        initialize: function() {
          this.baseCollection = this.collection;
          this.collection.on('reset', this.render, this);

          this.render();
        },
        render: function() {
            var el = $(this.el);
            el.html('');

            var filtersTemplate = _.template($("#template-filters").html());
            el.append(filtersTemplate());

            this.collection.each(function (model) {
                var singleOpinon = new SingleOpinionView({model:model});
                el.append(singleOpinon.render().el);
            });
        },
        events: {
            'click #validar-opinion': 'validarOpinion',
            'click #invalidar-opinion': 'invalidarOpinion',
            'click #save-opinion': 'saveOpinion',
            'click #inlineRadio1': 'showAll',
            'click #inlineRadio2': 'showValid',
            'click #inlineRadio3': 'showInvalid'
        },

        validarOpinion: function(e) {
            e.preventDefault();
            var idOpinion = $(e.target).data('idopinion');

            var model = this.collection.get(idOpinion);
            model.set('_status', '20');

            model.save();
        },
        invalidarOpinion: function(e) {
            e.preventDefault();
            var idOpinion = $(e.target).data('idopinion');

            var model = this.collection.get(idOpinion);
            model.set('_status', '10');

            model.save();
        },
        saveOpinion: function(e) {
            e.preventDefault();
            var idOpinion = $(e.target).data('idopinion');

            var model = this.collection.get(idOpinion);
            model.set('_mejor', $('#mejor_' + idOpinion).val());
            model.set('_peor', $('#peor_' + idOpinion).val());
            model.set('_cuerpo', $('#cuerpo_' + idOpinion).val());

            model.save();
        },
        showValid:function(e) {
            this.filter = '20';

            this.filterCollection();
        },
        showInvalid:function(e) {
            this.filter = '10';

            this.filterCollection();
        },
        showAll:function(e) {
            this.filter = undefined;

            this.filterCollection();
        },
        filterCollection: function(e) {
            var filtered;
            var original = this.collection.originalCollection;

            var filteredCollection = new Backbone.Collection(original,{});

            if (this.filter) {
                filtered = filteredCollection.where({_status: this.filter});
            } else {
                filtered = original;
            }

            this.collection.reset(filtered);
        }
    });



    return ListOpinionesView;
});