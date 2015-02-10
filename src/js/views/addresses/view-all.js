'use strict';

var Backbone = require('backbone');
var AddressesCollection = require('../../collections/addresses.js');
var AddressItemView = require('../addresses/view-all-row.js');

module.exports = Backbone.Marionette.CompositeView.extend({
    tagName: 'div',
    className: 'inline-block relative',
    template: require('../../templates/addresses/view-all.hbs'),
    childView: AddressItemView,
    childViewContainer: '.addresses-data',
    events: {
        "click .dd-active-label": "clickActive"
    },
    initialize: function () {
        var self = this;

        this.collection = new AddressesCollection();
        this.collection.fetch({reset: true}).then(function(){
            if (self.collection.models.length == 0) {
                alert('No addresses coming from the API!');
            }
        });

        this.model = new Backbone.Model({ page_title: 'Addresses' });
    }
});