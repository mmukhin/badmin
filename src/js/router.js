var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var AddressesView = require('./views/addresses/view-all.js');
var AddressView = require('./views/addresses/view-single.js');
var AddressModel = require('./models/address.js');
var NotifierModel = require('./models/notifier-model.js');
var LoginView = require('./views/login/view.js');
var HomeView = require('./views/home/view.js');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'home',
        'addresses/create': 'addressesCreate',
        'addresses/:id': 'addressesById',
        'addresses': 'addresses',
        'login': 'login',
    },
    activateMenu: function(className) {
        $('.menu').children().removeClass('active');
        $(className).addClass('active');
    },
    home: function() {

        this.activateMenu('.menu-addresses');
        TheApp.app.viewManager.currentViewRegion.show( new HomeView() );
    },
    addressesCreate: function (id) {
        this.activateMenu('.menu-address-create, .menu-addresses');

        TheApp.app.viewManager.currentViewRegion.show( new AddressView({
            'model': new AddressModel(),
            'create': true
        }));
    },
    addressesById: function (id) {
        this.activateMenu('.menu-addresses');

        var AddressModelById = new AddressModel({'id': id});
        AddressModelById.fetch({
            success: function () {
                TheApp.app.viewManager.currentViewRegion.show(new AddressView({
                    'model': AddressModelById
                }));
            },
            error: function () {
                alert('Address not found');
            }
        });
    },
    addresses: function () {
        this.activateMenu('.menu-addresses');
        TheApp.app.viewManager.currentViewRegion.show( new AddressesView() );
    },
    notFound: function () {
        //alert('not found');
        //Boomrat.app.appView.contentRegion.show(new Boomrat.Views.Error({
        //    code: 404
        //}));
    }
});