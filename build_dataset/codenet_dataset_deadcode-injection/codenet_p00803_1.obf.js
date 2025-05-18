var a0_0x516ef2 = a0_0x1ded;
var input = require('fs')[a0_0x516ef2(0x0)](a0_0x516ef2(0x1), 'utf8');
function a0_0x1ded(cFTAcU, key) {
    var stringArray = a0_0x3764();
    a0_0x1ded = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ded(cFTAcU, key);
}
var arr = input[a0_0x516ef2(0x2)]()[a0_0x516ef2(0x3)]('\x0a')[a0_0x516ef2(0x4)](Number);
function a0_0x3764() {
    var _0x5e46e2 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'map'
    ];
    a0_0x3764 = function () {
        return _0x5e46e2;
    };
    return a0_0x3764();
}
while (!![]) {
    var n = arr['shift']();
    if (n == 0x0)
        break;
    var max = 0x0;
    for (var i = 0x0; i <= 0x36; i++) {
        for (var j = 0x0; j <= 0x60; j++) {
            var sum = i * i * i + j * (j + 0x1) * (j + 0x2) / 0x6;
            if (n >= sum)
                max = Math['max'](max, sum);
        }
    }
    console['log'](max);
}