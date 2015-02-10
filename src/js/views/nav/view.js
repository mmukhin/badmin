'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var UserMenuView = require('../users/user-menu.js');

module.exports = Marionette.LayoutView.extend({
    id: 'nav',
    className: 'bottom-space',

    template: require('../../templates/nav/nav.hbs'),
    regions: {
        userView: '#region-user'
    },
    render: function(){

        this.$el.html(this.template());

        this.userView.show( new UserMenuView({model: TheApp.app.user}) );

        return this;
    }
});