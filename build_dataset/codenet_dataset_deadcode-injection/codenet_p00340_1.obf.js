var a0_0x4e62b8 = a0_0xd338;
var input = require('fs')[a0_0x4e62b8(0x0)]('/dev/stdin', a0_0x4e62b8(0x1));
var arr = input[a0_0x4e62b8(0x2)]()[a0_0x4e62b8(0x3)]('\x20')['map'](Number);
var a = arr[0x0];
var b = arr[0x1];
function a0_0x99e3() {
    var _0x192142 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'yes',
        'log'
    ];
    a0_0x99e3 = function () {
        return _0x192142;
    };
    return a0_0x99e3();
}
var c = arr[0x2];
var d = arr[0x3];
function a0_0xd338(uvTfMV, key) {
    var stringArray = a0_0x99e3();
    a0_0xd338 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xd338(uvTfMV, key);
}
if (a == b && c == d)
    console['log'](a0_0x4e62b8(0x4));
else if (a == c && b == d)
    console[a0_0x4e62b8(0x5)](a0_0x4e62b8(0x4));
else if (a == d && b == c)
    console[a0_0x4e62b8(0x5)](a0_0x4e62b8(0x4));
else
    console[a0_0x4e62b8(0x5)]('no');