/**
 * Created by lph on 2017/5/2.
 */
"use strict";

var ng_core = require('@angular/core');
var ng_router = require('@angular/router');

var authService = require('../../service/auth.service');

var ContentComponent =
    ng_core.Component({
        selector: '',
        templateUrl: 'src/js/app/component/content/content.component.html'
    })
        .Class({
            constructor:[ ng_router.Router, authService.AuthService, function (router, authService) {
                    this._router = router;
                    this._authService = authService;
                    this.pass = "";
            }],
            ngOnInit:function () {},
            toggle: function() {
                var _this = this;
                var status = $("#enter").val();
                _this._authService.toggleActivatePass(status);
            }
        });

exports.ContentComponent = ContentComponent;