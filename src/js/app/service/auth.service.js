"use strict";

var ng_router = require('@angular/router');

var AuthService = (function () {
    function AuthService(router) {
        this._router = router;
        this.isEnterPass = false;
        this.isOutPass = false;
    }

    AuthService.parameters = [ng_router.Router];

    AuthService.prototype = {

        canActivate: function(ActivatedRouteSnapshot, RouterStateSnapshot) {
            var _this = this;
            return _this.switchCanActivateUrl(RouterStateSnapshot.url);
        },
        canDeactivate: function(ActivatedRouteSnapshot, RouterStateSnapshot) {
            var _this = this;
            return _this.switchCanDeactivateUrl(ActivatedRouteSnapshot._router.url);
        },
        switchCanActivateUrl: function(url) {
            var _this = this;
            switch (url) {
                case "/content/item":
                    if(!_this.isEnterPass) {
                        alert("item not enter, jump to content");
                        _this._router.navigate(["/content"]);
                    }
                    return _this.isEnterPass;
                    break;
            }
        },
        switchCanDeactivateUrl: function(url) {
            var _this = this;
            switch (url) {
                case "/admin":
                    if(!_this.isOutPass) {
                        alert("admin not leave");
                    }
                    return _this.isOutPass;
                    break;
            }
        },
        toggleActivatePass: function(status) {
            var _this = this;
            if(status == "pass") {
                _this.isEnterPass = true;
            } else {
                _this.isEnterPass = false;
            }
        },
        toggleDeactivatePass: function(status) {
            var _this = this;
            if(status == "pass") {
                _this.isOutPass = true;
            } else {
                _this.isOutPass = false;
            }
        }
    };
    return AuthService;
})();

exports.AuthService = AuthService;