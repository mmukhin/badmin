'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;


module.exports = Backbone.Marionette.View.extend({
    el: '#login',
    className: 'clearfix horizontal-space',
    template: require('../../templates/login/login.hbs'),
    events: {
        'click .form-submit-login': 'submitLogin',
        'keyup #username': 'keyupLogin',
        'keyup #password': 'keyupLogin'
    },
    initialize: function(){

    },
    render: function(){
        this.$el.addClass(this.className).html(this.template());
        return this;
    },
    submitLogin: function(e) {
        e.preventDefault();
        TheApp.app.user.tryLogin(this.$('#username').val(), this.$('#password').val());
    },
    keyupLogin: function(e) {
        e.preventDefault();
        if (e.keyCode == 13) {
            this.submitLogin(e);
        }
    }
});