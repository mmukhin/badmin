'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var AddressModel = require('../models/address.js');

module.exports = Backbone.Collection.extend({
    model: AddressModel,
    url : window.TheApp.config.api + '/addresses',
    useFixtures: true,
    fixture: 'ajaxfixtures/addresses',
    fixtureType: 'json',
    comparator: function (address) {
        return address.get('id');
    }
});