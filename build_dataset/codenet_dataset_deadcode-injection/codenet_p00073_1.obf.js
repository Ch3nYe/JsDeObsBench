function a0_0x583a() {
    var _0x3e9e71 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'log',
        'sqrt',
        'toFixed'
    ];
    a0_0x583a = function () {
        return _0x3e9e71;
    };
    return a0_0x583a();
}
var a0_0x101139 = a0_0x208c;
var input = require('fs')[a0_0x101139(0x0)](a0_0x101139(0x1), a0_0x101139(0x2))['trim']();
var lines = input[a0_0x101139(0x3)]('\x0a');
function a0_0x208c(ABwRML, key) {
    var stringArray = a0_0x583a();
    a0_0x208c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x208c(ABwRML, key);
}
while (!![]) {
    var x = +lines[a0_0x101139(0x4)]();
    var h = +lines[a0_0x101139(0x4)]();
    if (x + h == 0x0)
        break;
    console[a0_0x101139(0x5)]((x * x + x * Math[a0_0x101139(0x6)](0x4 * h * h + x * x))[a0_0x101139(0x7)](0x6));
}