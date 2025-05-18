var a0_0x5dde88 = a0_0x578f;
function a0_0x2508() {
    var _0x377977 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'length',
        'shift',
        'map',
        'sort',
        'log'
    ];
    a0_0x2508 = function () {
        return _0x377977;
    };
    return a0_0x2508();
}
var input = require('fs')['readFileSync'](a0_0x5dde88(0x0), a0_0x5dde88(0x1));
var Arr = input[a0_0x5dde88(0x2)]()[a0_0x5dde88(0x3)]('\x0a');
function a0_0x578f(NZGkez, key) {
    var stringArray = a0_0x2508();
    a0_0x578f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x578f(NZGkez, key);
}
while (!![]) {
    if (Arr[a0_0x5dde88(0x4)] == 0x0)
        break;
    var n = Arr[a0_0x5dde88(0x5)]();
    var arr = Arr[a0_0x5dde88(0x5)]()[a0_0x5dde88(0x3)]('\x20')[a0_0x5dde88(0x6)](Number);
    arr[a0_0x5dde88(0x7)](function (a, b) {
        return a - b;
    });
    var sum = 0x0;
    var time = 0x0;
    arr['forEach'](function (v) {
        sum += v + time;
        time += v;
    });
    console[a0_0x5dde88(0x8)](sum);
}