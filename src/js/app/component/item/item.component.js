"use strict";

var ng_core = require('@angular/core');
var ng_router = require('@angular/router');

var cookie = require('ng2-cookies/ng2-cookies');

var ItemComponent =
    ng_core.Component({
            selector: '',
            templateUrl: 'src/js/app/component/item/item.component.html'
        })
        .Class({
            constructor:[ ng_router.Router, function (router) {
                this._router = router;
                this.token = JSON.parse(cookie.Cookie.get("magicLensToken"));
            }],
            ngOnInit:function () {}
        });

exports.ItemComponent = ItemComponent;