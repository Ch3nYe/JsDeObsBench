var a0_0x114b48 = a0_0x3d7f;
var input = require('fs')[a0_0x114b48(0x0)](a0_0x114b48(0x1), a0_0x114b48(0x2));
function a0_0x53b4() {
    var _0x568d52 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        '0\x200\x200\x200\x200\x200',
        'log'
    ];
    a0_0x53b4 = function () {
        return _0x568d52;
    };
    return a0_0x53b4();
}
function a0_0x3d7f(XbNepl, key) {
    var stringArray = a0_0x53b4();
    a0_0x3d7f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3d7f(XbNepl, key);
}
var Arr = input[a0_0x114b48(0x3)]()[a0_0x114b48(0x4)]('\x0a');
while (!![]) {
    var BR = Arr[a0_0x114b48(0x5)]();
    if (BR == a0_0x114b48(0x6))
        break;
    var br = BR[a0_0x114b48(0x4)]('\x20')['map'](Number);
    var b = br[0x0];
    var r = br[0x1];
    var g = br[0x2];
    var c = br[0x3];
    var s = br[0x4];
    var t = br[0x5];
    var sum = 0x64;
    sum += b * 0xf;
    sum += r * 0xf;
    sum += (b * 0x5 + r * 0x3) * 0xf;
    sum += g * 0x7;
    sum += c * 0x2;
    sum -= (b * 0x5 + r * 0x3) * 0x2;
    sum -= (t - s - (b * 0x5 + r * 0x3)) * 0x3;
    console[a0_0x114b48(0x7)](sum);
}