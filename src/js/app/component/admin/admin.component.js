"use strict";

var ng_core = require('@angular/core');
var ng_router = require('@angular/router');

var cookie = require('ng2-cookies/ng2-cookies');

var AdminComponent =
    ng_core.Component({
            selector: '',
            template: '<pre style="width: 50%;">Admin</pre>'
        })
        .Class({
            constructor:[ ng_router.Router, function (router) {
                this._router = router;
            }],
            ngOnInit:function () {}
        });

exports.AdminComponent = AdminComponent;