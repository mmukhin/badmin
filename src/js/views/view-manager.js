'use strict';

var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var NavView = require('./nav/view.js');
var FooterView = require('./footer/view.js');

module.exports = Marionette.LayoutView.extend({
    el: '#view-manager',
    template: require('../templates/view-manager.hbs'),
    regions: {
        currentViewRegion: '#region-current-view',
        navRegion: '#region-nav',
        footerRegion: '#region-footer'
    },
    initialize: function(){
        this.render();
    },
    render: function(){

        this.$el.prepend(this.template());

        this.navRegion.show( new NavView() );

        this.footerRegion.show( new FooterView() );

        return this;
    }
});