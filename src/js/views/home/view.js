'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Marionette.View.extend({
    template: require('../../templates/home/home.hbs'),
    events: {
        'click .test-notifications .btn': 'clickNotification'
    },
    clickNotification: function(e) {

        TheApp.app.notifier.addMessage({
            'type': e.currentTarget.dataset.notif,
            'message': e.currentTarget.dataset.msg
        });
    },
    render: function() {


        this.$el.html(this.template());
    }
});