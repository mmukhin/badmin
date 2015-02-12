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


        /**
         * Enable this if you'd like
         */
        /*TheApp.app.service.makeRequest(
            '/auth/user',
            'get',
            {},
            true,
            function (userObj) {
                var model = self.set(userObj);
                callback(false, model);
            },
            function (userObj) {
                var model = self.set(userObj);
                callback(true, model);
            }
        );*/

        // Remove this once you set up your own user API
        var userJson = {
            id: 1,
            email: "hello@psitsmike.com",
            username: "BobMarley",
            image: "images/pup.png"
        };
        var userModel = self.set(userJson);
        callback(true, userModel);
    },
    logout: function() {
        // Use this!
    }
});