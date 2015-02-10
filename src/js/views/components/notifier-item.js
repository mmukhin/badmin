'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var NotifierModel = require('../../models/notifier-model.js');

module.exports = Marionette.ItemView.extend({
    template: require('../../templates/components/notifier-item.hbs'),
    events: {
        'click .ink-dismiss': 'closeItem'
    },
    closeItem: function(a,b) {
        this.model.destroy();
    }
});