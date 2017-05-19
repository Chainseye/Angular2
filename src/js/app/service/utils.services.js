/**
 * Created by lerry on 14/11/2016.
 */
"use strict";

require('rxjs/add/operator/toPromise');

var UtilsService = (function () {
    function UtilsService() {
    }

    UtilsService.prototype = {
        catchException: function (response) {
            switch (response.status) {
                case 400:
                case 403:
                    return response.json();
                case 404:
                    return {comment: "数据请求地址不存在", retCode: 404};
                case 500:
                case 502:
                    return {comment: "数据请求失败,http status: " + response.status, retCode: response.status};
                case 504:
                    return {comment: "数据请求超时", retCode: response.status};
                default:
                    return {comment: "网络或服务器异常,请联系管理员", retCode: response.status};
            }
        }
    }
    return UtilsService;
})();

exports.UtilsService = UtilsService;
