'use strict';

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var NotifierCollection = require('../../../collections/notifications.js');
var NotificationModel = require('../../../models/notification.js');

module.exports = Marionette.CollectionView.extend({
    el: '#notifier',
    childView: require('./view-all-row.js'),
    initialize: function() {
        this.collection = new NotifierCollection();
    },
    addMessage: function(json){
        this.collection.add( new NotificationModel(json) );
        this.render();
    }
});