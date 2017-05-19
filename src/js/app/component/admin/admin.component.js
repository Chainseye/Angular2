"use strict";

var ng_core = require('@angular/core');
var ng_router = require('@angular/router');

var authService = require('../../service/auth.service');

var AdminComponent =
    ng_core.Component({
            selector: '',
            templateUrl: 'src/js/app/component/admin/admin.component.html'
    })
        .Class({
            constructor:[ ng_router.Router, authService.AuthService, function (router, authService) {
                this._router = router;
                this._authService = authService;
            }],
            ngOnInit:function () {},
            toggle: function() {
                var _this = this;
                var status = $("#out").val();
                _this._authService.toggleDeactivatePass(status);
            }
        });

exports.AdminComponent = AdminComponent;