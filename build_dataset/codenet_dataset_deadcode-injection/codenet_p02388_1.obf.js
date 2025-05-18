'use strict';
var a0_0x281e9b = a0_0x3e7f;
function a0_0x3e7f(fFVTrZ, key) {
    var stringArray = a0_0x5b7d();
    a0_0x3e7f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3e7f(fFVTrZ, key);
}
(function (stdin) {
    var _0x1af8aa = a0_0x3e7f;
    var inputs = stdin[_0x1af8aa(0x0)]()['trim']()[_0x1af8aa(0x1)]('\x0a');
    (function (x) {
        console['log'](x * x * x);
    }(parseInt(inputs[0x0], 0xa)));
}(require('fs')['readFileSync']('/dev/stdin', a0_0x281e9b(0x2))));
function a0_0x5b7d() {
    var _0x14cca1 = [
        'toString',
        'split',
        'utf8'
    ];
    a0_0x5b7d = function () {
        return _0x14cca1;
    };
    return a0_0x5b7d();
}