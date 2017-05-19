/**
 * Created by liph on 9/22/16.
 */
/**
 * Created by liph on 9/16/16.
 */
"use strict";

var ng_router  = require('@angular/router');

var contentComponent = require('../component/content/content.component');

var PortalMainRoutes = [
    {
        path: '',
        redirectTo: '/content',
        pathMatch: 'full'
    },
    {
        path: 'content',
        component: contentComponent.ContentComponent
    },
    {
        path: '**',
        redirectTo: '/content'
    }
];
exports.portalMainRoutingProviders = [
    ng_router.provideRoutes(PortalMainRoutes)
];
exports.routing = ng_router.RouterModule.forRoot(PortalMainRoutes);