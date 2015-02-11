var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var LoginView = require('./views/login/view.js');
require('./plugins/backbone.cors.js');
require('./plugins/backbone.fixtures.js');
require('./vendor/bootstrap.js');

$(document).ready( function(){

    window.TheApp = {};

    TheApp.config = require('../../config.js')[window.APPLICATION_ENVIRONMENT];
    TheApp.app = new Marionette.Application();

    //var md = new MobileDetect(window.navigator.userAgent);
    TheApp.app.env = {
        isMobileScreen: true
        //isMobileBrowser: md.mobile()
    };

    var NotifierView = require('./views/components/notifier/view-all.js');
    TheApp.app.notifier = new NotifierView();

    TheApp.app.addInitializer(function () {
        var UserModel = require('./models/user.js');
        TheApp.app.user = new UserModel();
        TheApp.app.login = new LoginView();

        TheApp.app.vent.trigger('login:success');

        /*TheApp.app.user.isUserLoggedIn( function(isLoggedIn, user) {
            if (isLoggedIn == true) {
                TheApp.app.user = user;
                TheApp.app.vent.trigger('login:success');
            }
            else {
                TheApp.app.user = user;
                TheApp.app.login.render();
            }
        });*/
    });

    TheApp.app.vent.on('login:success', function () {

        var ViewManager = require('./views/view-manager.js');
        TheApp.app.viewManager = new ViewManager();

        var Router = require('./router.js');
        TheApp.app.router = new Router();

        TheApp.app.login.remove();

        Backbone.history.start();
    });

    TheApp.app.on('start', function(options) {

    });

    TheApp.app.start();

});