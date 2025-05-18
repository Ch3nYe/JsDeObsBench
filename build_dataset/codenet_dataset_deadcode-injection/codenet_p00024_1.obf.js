'use strict';
var a0_0x26d8a4 = a0_0x8a44;
var input = require('fs')[a0_0x26d8a4(0x0)]('/dev/stdin', a0_0x26d8a4(0x1));
var minvs = input[a0_0x26d8a4(0x2)]()[a0_0x26d8a4(0x3)]('\x0a');
var minv;
while (minv = minvs['shift']()) {
    var floor = Math[a0_0x26d8a4(0x4)](Math[a0_0x26d8a4(0x5)](parseFloat(minv), 0x2) / 0x62 + 0x1);
    console[a0_0x26d8a4(0x6)](floor);
}
function a0_0x8a44(jksKrc, key) {
    var stringArray = a0_0x4dfe();
    a0_0x8a44 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x8a44(jksKrc, key);
}
function a0_0x4dfe() {
    var _0x5709e3 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'ceil',
        'pow',
        'log'
    ];
    a0_0x4dfe = function () {
        return _0x5709e3;
    };
    return a0_0x4dfe();
}