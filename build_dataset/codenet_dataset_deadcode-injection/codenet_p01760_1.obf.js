var a0_0x37d6b2 = a0_0x50ac;
var input = require('fs')[a0_0x37d6b2(0x0)](a0_0x37d6b2(0x1), a0_0x37d6b2(0x2));
var arr = input[a0_0x37d6b2(0x3)]()['split']('\x0a');
function a0_0x50ac(jhikSz, key) {
    var stringArray = a0_0x23c6();
    a0_0x50ac = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x50ac(jhikSz, key);
}
var TD = arr[a0_0x37d6b2(0x4)]()['split']('\x20')[a0_0x37d6b2(0x5)](Number);
var T = TD[0x0];
var D = TD[0x1];
var t = arr[a0_0x37d6b2(0x4)]()[a0_0x37d6b2(0x6)]('\x20')[a0_0x37d6b2(0x5)](Number);
function a0_0x23c6() {
    var _0x305c55 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'map',
        'split',
        'min',
        'abs',
        'log',
        'toFixed'
    ];
    a0_0x23c6 = function () {
        return _0x305c55;
    };
    return a0_0x23c6();
}
var tA = t[0x0];
var tB = t[0x1];
var d = arr['shift']()[a0_0x37d6b2(0x6)]('\x20')[a0_0x37d6b2(0x5)](Number);
var dA = d[0x0];
var dB = d[0x1];
var min = Infinity;
var i = 0x0;
while (!![]) {
    var vA = i * dA;
    if (vA > D)
        break;
    var j = 0x0;
    while (!![]) {
        var vB = j * dB;
        if (vA + vB > D)
            break;
        if (vA + vB != 0x0) {
            var c = T - (tA * vA + tB * vB) / (vA + vB);
            min = Math[a0_0x37d6b2(0x7)](min, Math[a0_0x37d6b2(0x8)](c));
        }
        j++;
    }
    i++;
}
console[a0_0x37d6b2(0x9)](min[a0_0x37d6b2(0xa)](0xa));