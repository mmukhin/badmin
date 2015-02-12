var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var Service = require('./service.js');
var Notifier = require('./views/components/notifier/view-all.js');
require('./plugins/backbone.cors.js');
require('./plugins/backbone.fixtures.js');
require('./vendor/bootstrap.js');

$(document).ready( function(){

    window.TheApp = {};

    TheApp.config = require('../../config.js')[window.APPLICATION_ENVIRONMENT];
    TheApp.app = new Marionette.Application();
    TheApp.app.service = Service;
    TheApp.app.notifier = new Notifier();

    TheApp.app.addInitializer(function () {

        var UserModel = require('./models/user.js');

        TheApp.app.user = new UserModel();
        TheApp.app.user.isUserLoggedIn( function(isLoggedIn, user) {
            if (isLoggedIn == true) {
                TheApp.app.user = user;
                TheApp.app.vent.trigger('login:success');
            }
            else {
                window.location.replace('http://path-to-login-page-here.com');
            }
        });
    });

    TheApp.app.vent.on('login:success', function () {

        var ViewManager = require('./views/view-manager.js');
        TheApp.app.viewManager = new ViewManager();

        var Router = require('./router.js');
        TheApp.app.router = new Router();

        Backbone.history.start();
    });

    TheApp.app.on('start', function(options) {

    });

    TheApp.app.start();
});