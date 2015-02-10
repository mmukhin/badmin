'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Marionette.ItemView.extend({
    tagName: "tr",
    className: "alternating grey",
    template: require('../../templates/addresses/view-all-row.hbs'),
    events: {
        //'click': 'onListenClick'
    },
    initialize: function(){
        //_.bindAll(this, "onListenClick");
    },
    onListenClick: function (e) {
        e.preventDefault();
    }
});