'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

module.exports = Backbone.Model.extend({
    defaults: {},
    urlRoot : window.TheApp.config.api + '/addresses',
    useFixtures: true,
    fixture: 'ajaxfixtures/address',
    fixtureType: 'json'
});