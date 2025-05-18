function a0_0x48c5() {
    var _0x260a4a = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'map',
        'log'
    ];
    a0_0x48c5 = function () {
        return _0x260a4a;
    };
    return a0_0x48c5();
}
function a0_0x2085(IBRnOY, key) {
    var stringArray = a0_0x48c5();
    a0_0x2085 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2085(IBRnOY, key);
}
var a0_0x6eb9a7 = a0_0x2085;
var input = require('fs')[a0_0x6eb9a7(0x0)](a0_0x6eb9a7(0x1), a0_0x6eb9a7(0x2));
var [m, f, b] = input['trim']()[a0_0x6eb9a7(0x3)]('\x20')[a0_0x6eb9a7(0x4)](Number);
if (m >= b)
    console[a0_0x6eb9a7(0x5)](0x0);
else if (m + f < b)
    console[a0_0x6eb9a7(0x5)]('NA');
else
    console[a0_0x6eb9a7(0x5)](b - m);