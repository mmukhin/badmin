'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
    defaults: {
        isLoggedIn: false
    },
    urlRoot : window.TheApp.config.api + '/users',
    isUserLoggedIn: function(callback) {
        var self = this;
        
        $.ajax({
            url: window.TheApp.config.api + '/auth/user',
            xhrFields: { withCredentials: true },
            error: function (userObj) {
                var model = self.set(userObj);
                callback(false, model);
            },
            success: function (userObj) {
                var model = self.set(userObj);
                callback(true, model);
            }
        });
    },
    logout: function() {

        $.ajax({
            method: 'get',
            url: window.TheApp.config.api + '/auth/logout',
            xhrFields: { withCredentials: true },
            error: function (response) {
                TheApp.app.notifier.addMessage({
                    'type': 'error',
                    'message': 'Error logging out'
                });
            },
            success: function (response) {
                window.location.reload();
            }
        });
    },

    tryLogin: function(username, password) {
        var self = this;

        $.ajax({
            method: 'post',
            url: window.TheApp.config.api + '/auth/login',
            xhrFields: { withCredentials: true },
            data: {
                username: username,
                password: password
            },
            error: function (userObj) {
                TheApp.app.notifier.addMessage({
                    'type': 'error',
                    'message': 'Invalid login'
                });
            },
            success: function (userObj) {
                var model = self.set(userObj);
                TheApp.app.user = model;
                TheApp.app.vent.trigger('login:success');
            }
        });
    }
});