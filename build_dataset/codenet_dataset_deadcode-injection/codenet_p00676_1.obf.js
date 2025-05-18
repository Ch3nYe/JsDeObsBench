var a0_0x2d8cb9 = a0_0x5139;
function heron(a, b, c) {
    var _0x565886 = a0_0x5139;
    var s = (a + b + c) / 0x2;
    var S = Math[_0x565886(0x0)](s * (s - a) * (s - b) * (s - c));
    return S;
}
var input = require('fs')[a0_0x2d8cb9(0x1)]('/dev/stdin', a0_0x2d8cb9(0x2));
var Arr = input['trim']()[a0_0x2d8cb9(0x3)]('\x0a');
function a0_0x55e8() {
    var _0x1c90da = [
        'sqrt',
        'readFileSync',
        'utf8',
        'split',
        'map',
        'toFixed'
    ];
    a0_0x55e8 = function () {
        return _0x1c90da;
    };
    return a0_0x55e8();
}
function a0_0x5139(omaEjV, key) {
    var stringArray = a0_0x55e8();
    a0_0x5139 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5139(omaEjV, key);
}
for (var i = 0x0; i < Arr['length']; i++) {
    var ALX = Arr[i][a0_0x2d8cb9(0x3)]('\x20')[a0_0x2d8cb9(0x4)](Number);
    var A = ALX[0x0];
    var L = ALX[0x1];
    var X = ALX[0x2];
    var sum = 0x0;
    sum += heron(A, L, L);
    sum += heron(L, (L + X) / 0x2, (L + X) / 0x2) * 0x2;
    console['log'](sum[a0_0x2d8cb9(0x5)](0xa));
}