'use strict';
(function (stdin) {
    var wAaVYK = {
        'iDLlV': function (x, y) {
            return x * y;
        },
        'QGKYr': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var inputs = stdin['toString']()['trim']()['split']('\x0a');
    (function (x) {
        console['log'](wAaVYK['iDLlV'](x, x) * x);
    }(wAaVYK['QGKYr'](parseInt, inputs[0x0], 0xa)));
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));