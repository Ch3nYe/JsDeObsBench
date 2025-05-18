var a0_0x262448 = a0_0x24a0;
function euc(a, b) {
    var _0x2c71a4 = a0_0x24a0;
    var r0 = a;
    var r1 = b;
    var x0 = 0x1;
    var x1 = 0x0;
    var y0 = 0x0;
    var y1 = 0x1;
    while (r1 > 0x0) {
        var q = Math[_0x2c71a4(0x0)](r0 / r1);
        var r2 = r0 % r1;
        var x2 = x0 - q * x1;
        var y2 = y0 - q * y1;
        r0 = r1;
        r1 = r2;
        x0 = x1;
        x1 = x2;
        y0 = y1;
        y1 = y2;
    }
    return [
        x0,
        y0
    ];
}
var input = require('fs')[a0_0x262448(0x1)](a0_0x262448(0x2), a0_0x262448(0x3))[a0_0x262448(0x4)]();
var nums = input[a0_0x262448(0x5)]('\x20')[a0_0x262448(0x6)](function (num) {
    return +num;
});
var a = nums[0x0];
function a0_0x2105() {
    var _0xc20cb1 = [
        'floor',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'join'
    ];
    a0_0x2105 = function () {
        return _0xc20cb1;
    };
    return a0_0x2105();
}
var b = nums[0x1];
function a0_0x24a0(tryjgz, key) {
    var stringArray = a0_0x2105();
    a0_0x24a0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x24a0(tryjgz, key);
}
console['log'](euc(a, b)[a0_0x262448(0x7)]('\x20'));