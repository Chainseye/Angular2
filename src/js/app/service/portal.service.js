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

    };
    return PortalService;
})();

exports.PortalService = PortalService;