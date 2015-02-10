'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var NotifierModel = require('../../models/notifier-model.js');


module.exports = Backbone.Marionette.View.extend({
    template: require('../../templates/users/user-menu.hbs'),
    events: {
        'click #logout': 'submitLogout'
    },
    initialize: function(){

    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    submitLogout: function() {
        TheApp.app.user.logout();
    }
});