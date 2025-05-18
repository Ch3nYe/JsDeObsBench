var a0_0x5317c2 = a0_0x1c7c;
function a0_0x1c7c(zXlzYg, key) {
    var stringArray = a0_0x18a4();
    a0_0x1c7c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c7c(zXlzYg, key);
}
function heron(a, b, c) {
    var _0x230579 = a0_0x1c7c;
    var s = (a + b + c) / 0x2;
    var S = Math[_0x230579(0x0)](s * (s - a) * (s - b) * (s - c));
    return S;
}
var input = require('fs')[a0_0x5317c2(0x1)](a0_0x5317c2(0x2), 'utf8');
function a0_0x18a4() {
    var _0x4afb41 = [
        'sqrt',
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'length',
        'map',
        'pow',
        'log',
        'apply'
    ];
    a0_0x18a4 = function () {
        return _0x4afb41;
    };
    return a0_0x18a4();
}
var Arr = input[a0_0x5317c2(0x3)]()[a0_0x5317c2(0x4)]('\x0a');
for (var i = 0x0; i < Arr[a0_0x5317c2(0x5)]; i++) {
    var arr = Arr[i][a0_0x5317c2(0x4)](',')[a0_0x5317c2(0x6)](Number);
    (function (x1, y1, x2, y2, x3, y3, x4, y4) {
        var _0x1becb4 = a0_0x1c7c;
        var d12 = Math[_0x1becb4(0x0)](Math[_0x1becb4(0x7)](x1 - x2, 0x2) + Math[_0x1becb4(0x7)](y1 - y2, 0x2));
        var d23 = Math[_0x1becb4(0x0)](Math[_0x1becb4(0x7)](x2 - x3, 0x2) + Math[_0x1becb4(0x7)](y2 - y3, 0x2));
        var d34 = Math[_0x1becb4(0x0)](Math[_0x1becb4(0x7)](x3 - x4, 0x2) + Math[_0x1becb4(0x7)](y3 - y4, 0x2));
        var d41 = Math[_0x1becb4(0x0)](Math['pow'](x4 - x1, 0x2) + Math[_0x1becb4(0x7)](y4 - y1, 0x2));
        var d13 = Math['sqrt'](Math['pow'](x1 - x3, 0x2) + Math[_0x1becb4(0x7)](y1 - y3, 0x2));
        var d24 = Math[_0x1becb4(0x0)](Math[_0x1becb4(0x7)](x2 - x4, 0x2) + Math['pow'](y2 - y4, 0x2));
        var A = heron(d12, d24, d41) + heron(d23, d34, d24);
        var B = heron(d12, d23, d13) + heron(d13, d34, d41);
        var ans = Math['abs'](A - B) < 0.00001 ? 'YES' : 'NO';
        console[_0x1becb4(0x8)](ans);
    }[a0_0x5317c2(0x9)](null, arr));
}