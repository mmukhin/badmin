'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Marionette.ItemView.extend({
    tagName: "tr",
    template: require('../../templates/addresses/view-all-row.hbs')
});