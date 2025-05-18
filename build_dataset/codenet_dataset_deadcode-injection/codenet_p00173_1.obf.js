var a0_0x58301d = a0_0xdf9d;
function a0_0x38ca() {
    var _0x2ff82d = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'length',
        'log'
    ];
    a0_0x38ca = function () {
        return _0x2ff82d;
    };
    return a0_0x38ca();
}
function a0_0xdf9d(jwOZuI, key) {
    var stringArray = a0_0x38ca();
    a0_0xdf9d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xdf9d(jwOZuI, key);
}
var input = require('fs')[a0_0x58301d(0x0)](a0_0x58301d(0x1), a0_0x58301d(0x2));
var Arr = input[a0_0x58301d(0x3)]()[a0_0x58301d(0x4)]('\x0a');
for (var i = 0x0; i < Arr[a0_0x58301d(0x5)]; i++) {
    var arr = Arr[i][a0_0x58301d(0x4)]('\x20');
    var a = arr[0x1] - 0x0 + (arr[0x2] - 0x0);
    var b = (arr[0x1] - 0x0) * 0xc8 + (arr[0x2] - 0x0) * 0x12c;
    console[a0_0x58301d(0x6)](arr[0x0] + '\x20' + a + '\x20' + b);
}