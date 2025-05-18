function a0_0x3da4() {
    var _0x2a8153 = [
        'utf8',
        'trim',
        'split',
        'map',
        'log'
    ];
    a0_0x3da4 = function () {
        return _0x2a8153;
    };
    return a0_0x3da4();
}
var a0_0x35e2d7 = a0_0x485d;
function a0_0x485d(aBSgPf, key) {
    var stringArray = a0_0x3da4();
    a0_0x485d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x485d(aBSgPf, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x35e2d7(0x0));
var [a, b, c, d] = input[a0_0x35e2d7(0x1)]()[a0_0x35e2d7(0x2)]('\x20')[a0_0x35e2d7(0x3)](Number);
if (a * b % 0x2 != 0x0 && (c + d) % 0x2 != 0x0)
    console[a0_0x35e2d7(0x4)]('No');
else
    console['log']('Yes');