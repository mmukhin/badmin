'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = {
    makeRequest: function (api_path, http_method, data, async, onSuccess, onError) {
        data = data || {};
        async = async || true;
        return $.ajax({
            url: window.TheApp.config.api + api_path,
            method: http_method,
            xhrFields: {
                withCredentials: true
            },
            async: async,
            data: data,
            success: function (response) {
                if (! onSuccess) {
                    alert('AJAX success callback is not defined');
                    return;
                }
                onSuccess(response);
            },
            error: function (response) {
                if (! onError) {
                    alert('AJAX error callback is not defined');
                    return;
                }
                onError(response);
            }
        });
    }
};
