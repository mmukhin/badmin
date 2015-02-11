'use strict';

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var NotificationModel = require('../../../models/notification.js');

module.exports = Marionette.ItemView.extend({
    model: NotificationModel,
    template: require('../../../templates/components/notifier/view-all-row.hbs'),
    className: 'col-12 ',
    events: {
        'click .alert .close': 'closeItem'
    },
    closeItem: function() {
        this.model.destroy();
    },
    onRender: function() {
        this.$('.alert').addClass('alert-'+this.model.get('type'));
    }
});