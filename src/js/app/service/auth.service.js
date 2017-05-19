"use strict";

var ng_router = require('@angular/router');

var AuthService = (function () {
    function AuthService(router) {
        this._router = router;
        this.isPass = true;
    }

    AuthService.parameters = [ng_router.Router];

    AuthService.prototype = {

        canActivate: function() {
            var _this = this;
            var s = Math.floor(Math.random()*10+1);
            if(s > 5) {
                console.log("canActivate: Pass" + s);
                return true;
            } else {
                console.log("canActivate:  Not" + s);
                return false;
            }
        },
        canDeactivate: function() {
            var s = Math.floor(Math.random()*10+1);
            if(s > 5) {
                console.log("canDeactivate: Pass" + s);
                return true;
            } else {
                console.log("canDeactivate: Not" + s);
                return false;
            }
        }
    }
    ;
    return AuthService;
})();

exports.AuthService = AuthService;