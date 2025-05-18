function a0_0x472f() {
    var _0x4dbd29 = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'map',
        'sort',
        'length',
        'max',
        'shift',
        'log'
    ];
    a0_0x472f = function () {
        return _0x4dbd29;
    };
    return a0_0x472f();
}
var a0_0xd3d337 = a0_0x5200;
var input = require('fs')[a0_0xd3d337(0x0)](a0_0xd3d337(0x1), 'utf8');
function a0_0x5200(dzDwaQ, key) {
    var stringArray = a0_0x472f();
    a0_0x5200 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5200(dzDwaQ, key);
}
var Arr = input['trim']()[a0_0xd3d337(0x2)]('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var p = Arr['shift']()[a0_0xd3d337(0x2)]('\x20')[a0_0xd3d337(0x3)](Number);
    var j = Arr['shift']()[a0_0xd3d337(0x2)]('\x20')['map'](Number);
    var sum = p['reduce'](function (a, b) {
        return a + b;
    });
    j[a0_0xd3d337(0x4)](function (a, b) {
        return b - a;
    });
    var max = sum * n;
    while (!![]) {
        if (j[a0_0xd3d337(0x5)] == 0x0)
            break;
        n--;
        max = Math[a0_0xd3d337(0x6)](max, (sum + j[a0_0xd3d337(0x7)]()) * n);
    }
    console[a0_0xd3d337(0x8)](max);
}