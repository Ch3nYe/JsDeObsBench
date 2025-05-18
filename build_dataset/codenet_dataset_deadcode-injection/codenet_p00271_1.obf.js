function a0_0x3889() {
    var _0x35929f = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'log'
    ];
    a0_0x3889 = function () {
        return _0x35929f;
    };
    return a0_0x3889();
}
var a0_0x7baa8b = a0_0xc67f;
function a0_0xc67f(uMXWWT, key) {
    var stringArray = a0_0x3889();
    a0_0xc67f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xc67f(uMXWWT, key);
}
var input = require('fs')[a0_0x7baa8b(0x0)](a0_0x7baa8b(0x1), a0_0x7baa8b(0x2));
var Arr = input[a0_0x7baa8b(0x3)]()[a0_0x7baa8b(0x4)]('\x0a');
for (var i = 0x0; i < 0x7; i++) {
    var arr = Arr[i][a0_0x7baa8b(0x4)]('\x20')['map'](Number);
    console[a0_0x7baa8b(0x5)](arr[0x0] - arr[0x1]);
}