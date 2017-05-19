/**
 * Created by lph on 9/22/16.
 */
"use strict";

var ng_core = require('@angular/core');
var form_module = require('@angular/forms');
var platform_browser = require('@angular/platform-browser');
var common_module = require('@angular/common');
var http = require('@angular/http');

var portalService = require('../service/portal.service');
var utilsService = require('../service/utils.services');

var portalMainRoutes = require('../route/portalMain.routes');

var portalComponent = require('../component/portalMain/portalMain.component');
var contentComponent = require('../component/content/content.component');

var PortalMainModule = ng_core.NgModule(
    {
        imports: [
            platform_browser.BrowserModule,
            form_module.FormsModule,
            http.HttpModule,
            common_module.CommonModule,
            portalMainRoutes.routing
        ],
        declarations: [
            portalComponent.PortalMainComponent,
            contentComponent.ContentComponent
        ],
        providers: [
            portalMainRoutes.portalMainRoutingProviders,
            portalService.PortalService,
            utilsService.UtilsService
        ],
        bootstrap: [
            portalComponent.PortalMainComponent
        ]
    }
)
    .Class({
        constructor:function () {}
    });

exports.PortalMainModule = PortalMainModule;