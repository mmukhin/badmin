'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var NotifierModel = require('../models/notifier-model.js');

module.exports = Backbone.Collection.extend({
    model: NotifierModel
});