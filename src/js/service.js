'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = function() {

    this.api_domain = 'foobar';

    this.makeRequest = function (api_method, http_method, data, async, onSuccess, onError) {
        return $.ajax({
            url: this.api_domain + api_method,
            method: http_method,
            xhrFields: {withCredentials: true},
            async: async,
            data: data,
            success: function (response) {
                if (typeof onSuccess !== 'function') {
                    return;
                }

                onSuccess(response);
            },
            error: function (response) {
                if (typeof onError === 'undefined') {
                    this.apiErrorHandler(response);
                    return;
                }

                if (typeof onError !== 'function') {
                    return;
                }

                onError(response);
            }.bind(this)
        });
    };

    this.apiErrorHandler = function (response) {
        var message;

        if (typeof response === 'string') {
            message = response;
        }

        if (typeof response === 'object') {
            if (typeof response.responseText === 'string') {
                message = response.responseText;
            }

            if (typeof response.responseText === 'object') {
                var parsedResponse = $.parseJSON(response.responseText);

                if (parsedReponse.message) {
                    message = parsedReponse.message;
                }
            }
        }

        if (!message) {
            return;
        }

        alert(message);
    };

    // Parse Get variables
    this.getQueryVariable = function (variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return(false);
    };
};
