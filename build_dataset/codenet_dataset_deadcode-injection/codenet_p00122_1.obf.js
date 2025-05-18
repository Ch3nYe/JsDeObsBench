function a0_0x7ac4(WCapMD, key) {
    var stringArray = a0_0x409f();
    a0_0x7ac4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7ac4(WCapMD, key);
}
var a0_0x5b4243 = a0_0x7ac4;
function bomb(x, y, z) {
    var _0xa24cf8 = a0_0x7ac4;
    max = Math['max'](max, z);
    if (max == n)
        return;
    var dx = [
        -0x1,
        0x0,
        0x1,
        -0x2,
        0x2,
        -0x2,
        0x2,
        -0x2,
        0x2,
        -0x1,
        0x0,
        0x1
    ];
    var dy = [
        -0x2,
        -0x2,
        -0x2,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x1,
        0x1,
        0x2,
        0x2,
        0x2
    ];
    var Safe = {};
    for (var i = -0x1; i <= 0x1; i++) {
        for (var j = -0x1; j <= 0x1; j++) {
            Safe[water[z * 0x2] + i + '\x20' + (water[z * 0x2 + 0x1] + j)] = !![];
        }
    }
    for (var i = 0x0; i < 0xc; i++) {
        var xx = x + dx[i];
        var yy = y + dy[i];
        if (xx < 0x0 || yy < 0x0 || xx >= 0xa || yy >= 0xa)
            continue;
        if (Safe[_0xa24cf8(0x0)](xx + '\x20' + yy))
            bomb(xx, yy, z + 0x1);
    }
}
var input = require('fs')[a0_0x5b4243(0x1)](a0_0x5b4243(0x2), 'utf8');
function a0_0x409f() {
    var _0x11a977 = [
        'hasOwnProperty',
        'readFileSync',
        '/dev/stdin',
        'trim',
        'shift',
        'split',
        'map',
        'log'
    ];
    a0_0x409f = function () {
        return _0x11a977;
    };
    return a0_0x409f();
}
var Arr = input[a0_0x5b4243(0x3)]()['split']('\x0a');
while (!![]) {
    var xy = Arr[a0_0x5b4243(0x4)]()[a0_0x5b4243(0x5)]('\x20')[a0_0x5b4243(0x6)](Number);
    if (xy[0x0] == 0x0 && xy[0x1] == 0x0)
        break;
    var map = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    var n = Arr[a0_0x5b4243(0x4)]() - 0x0;
    var water = Arr['shift']()[a0_0x5b4243(0x5)]('\x20')['map'](Number);
    var max = 0x0;
    bomb(xy[0x0], xy[0x1], 0x0);
    console[a0_0x5b4243(0x7)](max == n ? 'OK' : 'NA');
}