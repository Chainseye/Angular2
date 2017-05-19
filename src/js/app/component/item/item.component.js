"use strict";

var ng_core = require('@angular/core');
var ng_router = require('@angular/router');

var cookie = require('ng2-cookies/ng2-cookies');

var ItemComponent =
    ng_core.Component({
            selector: '',
            template: '<pre style="40%;">Item</pre>'
        })
        .Class({
            constructor:[ ng_router.Router, function (router) {
                this._router = router;
                this.token = JSON.parse(cookie.Cookie.get("magicLensToken"));
            }],
            ngOnInit:function () {
                var _this = this;
                _this.checkCookie();
            },
            checkCookie: function() {
                var _this = this;
                //var s = Math.floor(Math.random()*10+1);
                //if(s > 5) {
                //    console.log("canDeactivate: Pass" + s);
                //    return true;
                //} else {
                //    console.log("canDeactivate: Not" + s);
                //    return false;
                //}
            }
        });

exports.ItemComponent = ItemComponent;