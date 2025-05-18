'use strict';
var a0_0x37e790 = a0_0x2f05;
function a0_0x2f05(AGDOWg, key) {
    var stringArray = a0_0x2736();
    a0_0x2f05 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2f05(AGDOWg, key);
}
function main(arg) {
    var _0x1f3b95 = a0_0x2f05;
    var input = arg[_0x1f3b95(0x0)]('\x0a');
    var retu = input[0x0];
    var kazu = [];
    for (var i = 0x1; retu >= i; i++) {
        kazu[_0x1f3b95(0x1)](input[i]);
    }
    for (var x = 0x0, len = kazu['length']; x < len; ++x) {
        var kazu2 = kazu[_0x1f3b95(0x2)](0x0, kazu['length']);
        kazu2['splice'](x, 0x1);
        console[_0x1f3b95(0x3)](Math['max'][_0x1f3b95(0x4)](null, kazu2));
    }
}
main(require('fs')[a0_0x37e790(0x5)]('/dev/stdin', a0_0x37e790(0x6)));
function a0_0x2736() {
    var _0x54d9d1 = [
        'split',
        'push',
        'slice',
        'log',
        'apply',
        'readFileSync',
        'utf8'
    ];
    a0_0x2736 = function () {
        return _0x54d9d1;
    };
    return a0_0x2736();
}