/**
 * Created by lph on 2017/5/2.
 */
"use strict";

var ng_core = require('@angular/core');
var ng_router = require('@angular/router');

var cookie = require('ng2-cookies/ng2-cookies');

var ContentComponent =
    ng_core.Component({
            selector: '',
            templateUrl: 'src/js/app/component/content/content.component.html'
        })
        .Class({
            constructor:[ ng_router.Router, function (router) {
                    this._router = router;
            }],
            ngOnInit:function () {
                var _this = this;
                console.log("vvvv");
            }
        });

exports.ContentComponent = ContentComponent;