"use strict";

var ng_router  = require('@angular/router');

var contentComponent = require('../component/content/content.component');
var adminComponent = require('../component/admin/admin.component');
var itemComponent = require('../component/item/item.component');

var authService = require('../service/auth.service');

var PortalMainRoutes = [
    {
        path: '',
        redirectTo: '/content',
        pathMatch: 'full'
    },
    {
        path: 'content',
        children: [
            {
                path: "",
                component: contentComponent.ContentComponent
            },
            {
                path: 'item',
                component: itemComponent.ItemComponent,
                canActivate: [authService.AuthService]
            }
        ]
    },
    {
        path: 'admin',
        children: [
            {
                path: "",
                component: adminComponent.AdminComponent,
                canDeactivate: [authService.AuthService]
            }
        ]
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