'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Marionette.View.extend({
    template: require('../../templates/users/user-menu.hbs'),
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});