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
            'click #inlineRadio1': 'showAll',
            'click #inlineRadio2': 'showValid',
            'click #inlineRadio3': 'showInvalid'
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