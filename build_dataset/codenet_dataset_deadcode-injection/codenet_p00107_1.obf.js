var a0_0x2f4476 = a0_0xcc1b;
function a0_0xcc1b(vctQMV, key) {
    var stringArray = a0_0x51ee();
    a0_0xcc1b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xcc1b(vctQMV, key);
}
function a0_0x51ee() {
    var _0x3e724f = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'sort',
        'sqrt',
        'log'
    ];
    a0_0x51ee = function () {
        return _0x3e724f;
    };
    return a0_0x51ee();
}
var input = require('fs')[a0_0x2f4476(0x0)](a0_0x2f4476(0x1), a0_0x2f4476(0x2));
var Arr = input[a0_0x2f4476(0x3)]()[a0_0x2f4476(0x4)]('\x0a');
while (!![]) {
    var arr = Arr[a0_0x2f4476(0x5)]()[a0_0x2f4476(0x4)]('\x20')[a0_0x2f4476(0x6)](Number);
    if (arr[0x0] == 0x0 && arr[0x1] == 0x0 && arr[0x2] == 0x0)
        break;
    arr[a0_0x2f4476(0x7)](function (a, b) {
        return a - b;
    });
    var R = Math[a0_0x2f4476(0x8)](arr[0x0] * arr[0x0] + arr[0x1] * arr[0x1]);
    var n = Arr[a0_0x2f4476(0x5)]() - 0x0;
    for (var i = 0x0; i < n; i++) {
        var r = Arr[a0_0x2f4476(0x5)]() - 0x0;
        console[a0_0x2f4476(0x9)](r * 0x2 > R ? 'OK' : 'NA');
    }
}