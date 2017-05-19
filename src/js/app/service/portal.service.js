/**
 * Created by liph on 9/19/16.
 */
"use strict";

var ng_http = require('@angular/http'),
    cookie = require('ng2-cookies/ng2-cookies');

var utilsService = require('./utils.services');

require('rxjs/add/operator/toPromise');

var PortalService = (function () {
    function PortalService(http, utils) {
        this.contentUrl = "/v1/manage/api/arcase/";
        this._http = http;
        this._utils = utils;
        this.token = JSON.parse(cookie.Cookie.get("magicLensToken"));
        this._http._defaultOptions.headers.set("token", this.token);
    }

    PortalService.parameters = [ng_http.Http, utilsService.UtilsService];

    PortalService.prototype = {
        searchARCase: function(pageIndex, pageSize, value, type) {
            var _this = this;
            return _this._http.get(_this.contentUrl + "?keyword=" + value + "&channelId=" + type + "&start=" + (pageIndex - 1) * pageSize + "&count=" + pageSize + "&withTotal=1")
                .toPromise()
                .then(function(response) {
                    var result = response.json();
                    if(result.items.length != 0) {
                        for(var i = 0; i < result.items.length; ++i) {
                            result.items[i]["check"] = "";
                            if(result.items.length != 0) {
                                for(var j = 0; j < result.items[i].channels.length; ++j) {
                                    result.items[i].channels[j]["check"] = "";
                                }
                            }
                        }
                    }
                    return result;
                })
                .catch(function (response) {
                    return _this._utils.catchException(response);
                })
        }
    };
    return PortalService;
})();

exports.PortalService = PortalService;