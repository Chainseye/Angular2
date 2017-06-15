'use strict';

var ng_pipe = require('@angular/core');
var ng_pipeTransform = require('@angular/core');

var CheckNullPipe =
    ng_pipe.Pipe({
        name: "checkNull",
        pure: true
    }).
    Class({
        constructor: function() {},
        transform: function(vale, args) {
            var result = "";
            (vale == "")?(result = "无信息"):(result = vale);
            return result;
        }
    });

exports.CheckNullPipe = CheckNullPipe;