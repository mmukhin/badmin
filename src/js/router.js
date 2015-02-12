var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var AddressesView = require('./views/addresses/view-all.js');
var AddressView = require('./views/addresses/view-single.js');
var AddressModel = require('./models/address.js');
var HomeView = require('./views/home/view.js');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'home',
        'addresses/create': 'addressesCreate',
        'addresses/:id': 'addressesById',
        'addresses': 'addresses',
        '*path': 'notFound'
    },
    activateMenu: function(className) {
        $('#main-nav').children().removeClass('active');
        $(className).addClass('active');
    },
    home: function() {
        this.activateMenu('.navbar-brand');

        TheApp.app.viewManager.currentViewRegion.show( new HomeView() );
    },
    addressesCreate: function (id) {
        this.activateMenu('#nav-addresses');

        TheApp.app.viewManager.currentViewRegion.show( new AddressView({
            'model': new AddressModel(),
            'create': true
        }));
    },
    addressesById: function (id) {
        this.activateMenu('#nav-addresses');

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
        this.activateMenu('#nav-addresses');

        TheApp.app.viewManager.currentViewRegion.show( new AddressesView() );
    },
    notFound: function () {
        alert('View not found');
    }
});