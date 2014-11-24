define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var OpinionModel = Backbone.Model.extend({
        defaults:{
            _nombre: '',
            _apellidos: '',
            _email: '',
            _mejor: '',
            _peor: '',
            _cuerpo: '',
            _id: '',
            _status: ''
        }
    });

    return OpinionModel;
});