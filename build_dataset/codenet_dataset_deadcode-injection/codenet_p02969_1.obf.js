'use strict';
function a0_0x466a() {
    var _0x4efe73 = [
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x466a = function () {
        return _0x4efe73;
    };
    return a0_0x466a();
}
var a0_0x348321 = a0_0x50fe;
var input = require('fs')[a0_0x348321(0x0)](a0_0x348321(0x1), 'utf8');
function a0_0x50fe(oXfThb, key) {
    var stringArray = a0_0x466a();
    a0_0x50fe = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x50fe(oXfThb, key);
}
var r = parseInt(input, 0xa);
console['log'](0x3 * r * r);