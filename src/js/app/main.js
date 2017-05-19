"use strict";

var platform_browser_dynamic = require('@angular/platform-browser-dynamic');
var portalMain_module = require('./module/portalMain.module.js');

platform_browser_dynamic.platformBrowserDynamic().bootstrapModule(portalMain_module.PortalMainModule);