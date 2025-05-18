var a0_0x1214e8 = a0_0x5407;
var input = a0_0x1214e8(0x0);
var input = require('fs')[a0_0x1214e8(0x1)](a0_0x1214e8(0x2), a0_0x1214e8(0x3));
function a0_0x5407(byRgHp, key) {
    var stringArray = a0_0x3ff4();
    a0_0x5407 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5407(byRgHp, key);
}
function a0_0x3ff4() {
    var _0x2a0e10 = [
        '\x0a3\x207\x0a',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'push',
        'log'
    ];
    a0_0x3ff4 = function () {
        return _0x2a0e10;
    };
    return a0_0x3ff4();
}
var arr = input['trim']()[a0_0x1214e8(0x4)]('\x0a');
var k = arr[0x0]['split']('\x20')[0x0] - 0x0;
var x = arr[0x0][a0_0x1214e8(0x4)]('\x20')[0x1] - 0x0;
var a = [];
for (var i = x - k + 0x1; i < x + k; i++)
    a[a0_0x1214e8(0x5)](i);
console[a0_0x1214e8(0x6)](a['join']('\x20'));