var a0_0x800d80 = a0_0x1a22;
var input = require('fs')[a0_0x800d80(0x0)](a0_0x800d80(0x1), a0_0x800d80(0x2));
function a0_0x1a22(EbCaaT, key) {
    var stringArray = a0_0x410d();
    a0_0x1a22 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a22(EbCaaT, key);
}
var Arr = input[a0_0x800d80(0x3)]()[a0_0x800d80(0x4)]('\x0a');
function a0_0x410d() {
    var _0x5e168a = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map'
    ];
    a0_0x410d = function () {
        return _0x5e168a;
    };
    return a0_0x410d();
}
var j = 0x0;
while (!![]) {
    var v = Arr['shift']() - 0x0;
    if (v == 0x0)
        break;
    var m = Arr[a0_0x800d80(0x5)]()['split']('\x20')[a0_0x800d80(0x6)](Number);
    var money = 0xa * m[0x0] + 0x32 * m[0x1] + 0x64 * m[0x2] + 0x1f4 * m[0x3] - v;
    var M = [
        0x0,
        0x0,
        0x0,
        0x0
    ];
    while (0x1f4 <= money) {
        M[0x3]++;
        money -= 0x1f4;
    }
    while (0x64 <= money) {
        M[0x2]++;
        money -= 0x64;
    }
    while (0x32 <= money) {
        M[0x1]++;
        money -= 0x32;
    }
    while (0xa <= money) {
        M[0x0]++;
        money -= 0xa;
    }
    var coin = [
        0xa,
        0x32,
        0x64,
        0x1f4
    ];
    var str = '';
    m['forEach'](function (v, i) {
        if (v > M[i])
            str += coin[i] + '\x20' + (v - M[i]) + '\x0a';
    });
    console['log'](str);
}