var a0_0x4383b3 = a0_0x2c52;
function a0_0x2c52(guxyKO, key) {
    var stringArray = a0_0x58f4();
    a0_0x2c52 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2c52(guxyKO, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x4383b3(0x0));
var Arr = input['trim']()[a0_0x4383b3(0x1)]('\x0a');
while (!![]) {
    var Q = Arr[a0_0x4383b3(0x2)]() - 0x0;
    if (Q == -0x1)
        break;
    var x = Q / 0x2;
    while (Math[a0_0x4383b3(0x3)](Math[a0_0x4383b3(0x4)](x, 0x3) - Q) >= 0.00001 * Q) {
        x = x - (Math[a0_0x4383b3(0x4)](x, 0x3) - Q) / (0x3 * Math[a0_0x4383b3(0x4)](x, 0x2));
    }
    console[a0_0x4383b3(0x5)](x['toFixed'](0x6));
}
function a0_0x58f4() {
    var _0x28cbac = [
        'utf8',
        'split',
        'shift',
        'abs',
        'pow',
        'log'
    ];
    a0_0x58f4 = function () {
        return _0x28cbac;
    };
    return a0_0x58f4();
}