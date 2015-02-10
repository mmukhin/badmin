'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

module.exports = Backbone.Marionette.View.extend({
    state: {
        open: false
    },
    initialize: function(){
        this.context = null;

        return this;
    },
    render: function(){
        return this;
    },
    setContext: function(context) {
        this.context = context;
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