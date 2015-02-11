'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var NotificationModel = require('../models/notification.js');

module.exports = Backbone.Collection.extend({
    model: NotificationModel
});