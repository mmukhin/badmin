'use strict';

var Backbone = require('backbone');
var AddressModel = require('../../models/address.js');

module.exports = Backbone.Marionette.ItemView.extend({
    className: "alternating grey",
    template: require('../../templates/addresses/view-single.hbs'),
    model: AddressModel,
    defaults: {
        create: false
    },
    events: {
        'click .form-save': 'saveModel',
        'click .form-cancel': 'cancelSave'
    },
    initialize: function(){
        if (this.options.create) {
            this.model.set('page_title', 'Create Address');
            this.model.set('create', true);
        }
        else {
            this.model.set('page_title', 'Address by ID');
            this.model.set('create', false);
        }
    },
    onRender: function() {
    },
    saveModel: function() {
        var self = this;

        if (this.options.create) {
            var method = 'post';
        }
        else {
            var method = 'put';
        }

        var title = $('#address-form #title').val();
        var street = $('#address-form #street').val();
        var zip = $('#address-form #zip').val();
        var city = $('#address-form #city').val();
        var parent_city_id = $('#address-form #parent_city_id').val();

        var attributes = {
            'title': title,
            'street': street,
            'zip': zip,
            'city': city,
            'parent_city': {
                id: parseInt(parent_city_id)
            }
        };

        this.animateFetchStart();
        this.model.save(attributes)
            .done( function(model){
                if (self.options.create) {
                    TheApp.app.router.navigate('#addresses/'+self.model.get('id'), true);
                }
                else {
                    self.model.set(model);
                    self.render().animateFetchStop();
                }
            })
            .error( function(response){
                TheApp.app.notifier.addMessage({
                    'type': 'error',
                    'message': response.responseJSON.message
                });
            });
    },
    cancelSave: function() {
        if (confirm('Cancel and lose progress?')) {
            TheApp.app.router.navigate('#addresses', true);
        }
    },
    animateFetchStart: function(){
        this.$el.fadeTo(200, 0.2);
        return this;
    },
    animateFetchStop: function(){
        this.$el.fadeTo(200, 1);
        return this;
    }
});