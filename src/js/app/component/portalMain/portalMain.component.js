/**
 * Created by liph on 9/22/16.
 */
'use strict';

var ng_core = require('@angular/core'),
    ng_router = require('@angular/router');

var portalService = require('../../service/portal.service');
var checkNullPipe = require('../../pipe/checkNull.pipe');

var PortalMainComponent =
    ng_core.Component({
        selector: 'portal-main',
        templateUrl: '/src/js/app/component/portalMain/portalMain.component.html',
        pipes: [checkNullPipe.CheckNullPipe]
    }).
    Class({
        constructor: [ng_router.Router, portalService.PortalService, function(router, portalService) {
            this._router = router;
            this._portalService = portalService;
            this.data = [{"data": ""}, {"data": "bb"}];
            this.text = "text";
        }],
        ngOnInit: function() {}
    });

exports.PortalMainComponent = PortalMainComponent;