var a0_0x249d9d = a0_0x2fd2;
function tobu(arr) {
    var _0x40dad0 = a0_0x2fd2;
    var max = 0x0;
    for (var i = 0x0; i < arr[_0x40dad0(0x0)] - 0x1; i++) {
        if (i > max)
            break;
        var d = Math[_0x40dad0(0x1)](arr[i] / 0xa);
        max = Math[_0x40dad0(0x2)](max, i + d);
    }
    return max >= arr[_0x40dad0(0x0)] - 0x1;
}
var input = require('fs')['readFileSync'](a0_0x249d9d(0x3), a0_0x249d9d(0x4));
function a0_0x2fd2(FkkbiI, key) {
    var stringArray = a0_0x2476();
    a0_0x2fd2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2fd2(FkkbiI, key);
}
function a0_0x2476() {
    var _0x194d4a = [
        'length',
        'floor',
        'max',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'shift',
        'reverse',
        'yes',
        'log'
    ];
    a0_0x2476 = function () {
        return _0x194d4a;
    };
    return a0_0x2476();
}
var arr = input[a0_0x249d9d(0x5)]()[a0_0x249d9d(0x6)]('\x0a')[a0_0x249d9d(0x7)](Number);
var n = arr[a0_0x249d9d(0x8)]();
if (tobu(arr) && tobu(arr[a0_0x249d9d(0x9)]()))
    console['log'](a0_0x249d9d(0xa));
else
    console[a0_0x249d9d(0xb)]('no');