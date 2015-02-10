'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Marionette.View.extend({
    tagName: 'footer',
    template: require('../../templates/home/home.hbs'),
    render: function() {
        this.$el.html(this.template());
    }
});