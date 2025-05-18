function a0_0x4fa0() {
    var _0x5eae99 = [
        'readFileSync',
        '/dev/stdin',
        'floor',
        'log'
    ];
    a0_0x4fa0 = function () {
        return _0x5eae99;
    };
    return a0_0x4fa0();
}
var a0_0x35b38b = a0_0x3a88;
var x = require('fs')[a0_0x35b38b(0x0)](a0_0x35b38b(0x1), 'utf8');
x = parseInt(x, 0xa);
function a0_0x3a88(QfsuLH, key) {
    var stringArray = a0_0x4fa0();
    a0_0x3a88 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3a88(QfsuLH, key);
}
var h = Math[a0_0x35b38b(0x2)](x / 0xe10);
var m = Math[a0_0x35b38b(0x2)](x % 0xe10 / 0x3c);
var s = x % 0xe10 % 0x3c;
console[a0_0x35b38b(0x3)](h + ':' + m + ':' + s);