var a0_0x400200 = a0_0x3e60;
function a0_0x3b23() {
    var _0x352824 = [
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'split',
        'readFileSync',
        '/dev/stdin',
        'trim',
        'shift',
        'map',
        'indexOf',
        'length',
        'log',
        'join'
    ];
    a0_0x3b23 = function () {
        return _0x352824;
    };
    return a0_0x3b23();
}
var abc = a0_0x400200(0x0)[a0_0x400200(0x1)]('');
function a0_0x3e60(gxoaGg, key) {
    var stringArray = a0_0x3b23();
    a0_0x3e60 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3e60(gxoaGg, key);
}
var input = require('fs')[a0_0x400200(0x2)](a0_0x400200(0x3), 'utf8');
var Arr = input[a0_0x400200(0x4)]()[a0_0x400200(0x1)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x400200(0x5)]() - 0x0;
    if (n == 0x0)
        break;
    var k = Arr[a0_0x400200(0x5)]()[a0_0x400200(0x1)]('\x20')[a0_0x400200(0x6)](Number);
    var arr = Arr[a0_0x400200(0x5)]()['split']('');
    var j = 0x0;
    for (var i = 0x0; i < arr['length']; i++) {
        var num = abc[a0_0x400200(0x7)](arr[i]) - k[i % k[a0_0x400200(0x8)]];
        if (num < 0x0)
            num += abc['length'];
        arr[i] = abc[num];
    }
    console[a0_0x400200(0x9)](arr[a0_0x400200(0xa)](''));
}