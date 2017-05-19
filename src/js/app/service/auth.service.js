"use strict";

var ng_router = require('@angular/router');

var AuthService = (function () {
    function AuthService(router, state) {
        this._router = router;
        this._state = state;
        this.isPass = true;
    }

    AuthService.parameters = [ng_router.Router, ng_router.Router];

    AuthService.prototype = {

        canActivate: function(ActivatedRouteSnapshot, RouterStateSnapshot) {
            var _this = this;
            return _this.switchCanActivateUrl(RouterStateSnapshot.url);
        },
        canDeactivate: function() {
            //var s = Math.floor(Math.random()*10+1);
            //if(s > 5) {
            //    console.log("canDeactivate: Pass" + s);
            //    return true;
            //} else {
            //    console.log("canDeactivate: Not" + s);
            //    return false;
            //}
            return true;
        },
        switchCanActivateUrl: function(url) {
            var _this = this;
            switch (url) {
                case "/admin":
                    return true;
                    break;
                case "/content":
                    return true;
                    break;
                case "/content/item":
                    var s = Math.floor(Math.random()*10+1);
                    if(s > 5) {
                        console.log("canActivate: Pass" + s);
                        return true;
                    } else {
                        _this._router.navigate(["/content"]);
                        console.log("canActivate: Not" + s);
                        return false;
                    }
                    break;
            }
        }
    }
    ;
    return AuthService;
})();

exports.AuthService = AuthService;