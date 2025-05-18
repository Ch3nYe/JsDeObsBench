var a0_0x568129 = a0_0x5e9f;
var input = require('fs')['readFileSync'](a0_0x568129(0x0), a0_0x568129(0x1));
var arr = input[a0_0x568129(0x2)]()['split']('\x0a');
var [a, b] = arr[a0_0x568129(0x3)]()[a0_0x568129(0x4)]('\x20')[a0_0x568129(0x5)](Number);
function a0_0x5e9f(vsTvsW, key) {
    var stringArray = a0_0xac4d();
    a0_0x5e9f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5e9f(vsTvsW, key);
}
var [p, q, r] = arr[a0_0x568129(0x3)]()['split']('\x20')[a0_0x568129(0x5)](Number);
var hanareta = b * p;
var tikaduita = (b - a) * q;
function a0_0xac4d() {
    var _0x3417d4 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'log',
        'toFixed'
    ];
    a0_0xac4d = function () {
        return _0x3417d4;
    };
    return a0_0xac4d();
}
var d = hanareta - tikaduita;
console[a0_0x568129(0x6)]((d / (q + r) + b)[a0_0x568129(0x7)](0xc));