var a0_0xa54e2c = a0_0x4c0e;
var input = require('fs')[a0_0xa54e2c(0x0)](a0_0xa54e2c(0x1), a0_0xa54e2c(0x2));
function a0_0x4c0e(OSKZMt, key) {
    var stringArray = a0_0x3bfc();
    a0_0x4c0e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4c0e(OSKZMt, key);
}
var [a, b, x] = input[a0_0xa54e2c(0x3)]()[a0_0xa54e2c(0x4)]('\x20')[a0_0xa54e2c(0x5)](Number);
function a0_0x3bfc() {
    var _0x572321 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'min',
        'log'
    ];
    a0_0x3bfc = function () {
        return _0x572321;
    };
    return a0_0x3bfc();
}
var min = Infinity;
for (var i = 0x0; i <= 0x14; i++) {
    for (var j = 0x0; j <= 0x28; j++) {
        if (i * 0x3e8 + j * 0x1f4 >= x)
            min = Math[a0_0xa54e2c(0x6)](min, i * a + j * b);
    }
}
console[a0_0xa54e2c(0x7)](min);