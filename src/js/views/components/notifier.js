'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var NotifierCollection = require('../../collections/notifier-collection.js');
var NotifierModel = require('../../models/notifier-model.js');

module.exports = Marionette.CollectionView.extend({
    el: '#notifier',
    childView: require('./notifier-item.js'),
    state: {
        open: false,
        enabled: true
    },
    initialize: function() {
        var self = this;
        this.collection = new NotifierCollection();

        return this;
    },
    addMessage: function(json){
        this.collection.add( new NotifierModel(json) );
        this.render();
    },
    open: function() {
        // if dropdown is already open, then close
        if (this.state.open == true) {
            this.close();
        }
        else {
            var $filterDD = this.context.$('.dd-main');
            var widthActiveValue = this.context.$('.dd-active-label').width();

            if (widthActiveValue <= 40) {
                var pxLeft = (widthActiveValue / 2) - 40;
                $filterDD.css({'left': pxLeft});
            }

            $filterDD.fadeIn();
            this.state.open = true;
        }
    },
    close: function() {
        this.context.$('.dd-main').fadeOut();
        this.state.open = false;
    },
    setLabel: function(title) {
        this.context.$('.dd-active-label').html(title);
    }
});