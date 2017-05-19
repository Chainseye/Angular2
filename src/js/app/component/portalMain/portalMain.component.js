/**
 * Created by liph on 9/22/16.
 */
'use strict';

var ng_core = require('@angular/core'),
    cookie = require('ng2-cookies/ng2-cookies');
var ng_router = require('@angular/router');

var portalService = require('../../service/portal.service');

var PortalMainComponent =
    ng_core.Component({
        selector: 'portal-main',
        templateUrl: '/src/js/app/component/portalMain/portalMain.component.html'
    }).
    Class({
        constructor: [ng_router.Router, portalService.PortalService, function(router, portalService) {
            this._router = router;
            this._portalService = portalService;
        }],
        ngOnInit: function() {}
    });

exports.PortalMainComponent = PortalMainComponent;