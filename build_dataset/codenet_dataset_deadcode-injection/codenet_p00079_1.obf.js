var a0_0x30ff44 = a0_0x2ff2;
function heron(a, b, c) {
    var _0x12d5e2 = a0_0x2ff2;
    var s = (a + b + c) / 0x2;
    var S = Math[_0x12d5e2(0x0)](s * (s - a) * (s - b) * (s - c));
    return S;
}
var input = require('fs')['readFileSync'](a0_0x30ff44(0x1), 'utf8');
var Arr = input[a0_0x30ff44(0x2)]()[a0_0x30ff44(0x3)]('\x0a');
var xy1 = Arr[a0_0x30ff44(0x4)]()[a0_0x30ff44(0x3)](',')[a0_0x30ff44(0x5)](Number);
var xy2 = Arr['shift']()['split'](',')[a0_0x30ff44(0x5)](Number);
var x1 = xy1[0x0];
var y1 = xy1[0x1];
function a0_0x25d8() {
    var _0x502b98 = [
        'sqrt',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'map',
        'length',
        'pow',
        'log',
        'toFixed'
    ];
    a0_0x25d8 = function () {
        return _0x502b98;
    };
    return a0_0x25d8();
}
var x2 = xy2[0x0];
function a0_0x2ff2(uKsJEp, key) {
    var stringArray = a0_0x25d8();
    a0_0x2ff2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2ff2(uKsJEp, key);
}
var y2 = xy2[0x1];
var sum = 0x0;
for (var I = 0x0; I < Arr[a0_0x30ff44(0x6)]; I++) {
    var xy3 = Arr[I][a0_0x30ff44(0x3)](',')[a0_0x30ff44(0x5)](Number);
    var x3 = xy3[0x0];
    var y3 = xy3[0x1];
    var d12 = Math['sqrt'](Math[a0_0x30ff44(0x7)](x1 - x2, 0x2) + Math[a0_0x30ff44(0x7)](y1 - y2, 0x2));
    var d13 = Math[a0_0x30ff44(0x0)](Math[a0_0x30ff44(0x7)](x1 - x3, 0x2) + Math[a0_0x30ff44(0x7)](y1 - y3, 0x2));
    var d23 = Math[a0_0x30ff44(0x0)](Math['pow'](x2 - x3, 0x2) + Math[a0_0x30ff44(0x7)](y2 - y3, 0x2));
    sum += heron(d12, d13, d23);
    x2 = xy3[0x0];
    y2 = xy3[0x1];
}
console[a0_0x30ff44(0x8)](sum[a0_0x30ff44(0x9)](0x6));