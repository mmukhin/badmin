'use strict';

var Backbone = require('backbone')

module.exports = (function() {

    var proxiedSync = Backbone.sync;

    Backbone.sync = function(method, model, options) {
        options || (options = {});

        if (!options.crossDomain) {
            options.crossDomain = true;
        }

        if (!options.xhrFields) {
            options.xhrFields = {withCredentials:true};
        }

        return proxiedSync(method, model, options);
    };
})();