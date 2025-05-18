var a0_0x2d6980 = a0_0x5f1e;
var input = require('fs')[a0_0x2d6980(0x0)](a0_0x2d6980(0x1), a0_0x2d6980(0x2));
var arr = input[a0_0x2d6980(0x3)]()[a0_0x2d6980(0x4)]('\x0a');
var q = arr[a0_0x2d6980(0x5)]() - 0x0;
function a0_0x5f1e(UNeEdg, key) {
    var stringArray = a0_0x5e05();
    a0_0x5f1e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5f1e(UNeEdg, key);
}
var str = '';
var map = new Map();
for (var i = 0x0; i < q; i++) {
    var [a, b, c] = arr[i][a0_0x2d6980(0x4)]('\x20');
    if (a == '0')
        map[a0_0x2d6980(0x6)](b, c);
    else
        str += map[a0_0x2d6980(0x7)](b) + '\x0a';
}
function a0_0x5e05() {
    var _0x2209f5 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'set',
        'get',
        'log'
    ];
    a0_0x5e05 = function () {
        return _0x2209f5;
    };
    return a0_0x5e05();
}
console[a0_0x2d6980(0x8)](str[a0_0x2d6980(0x3)]());