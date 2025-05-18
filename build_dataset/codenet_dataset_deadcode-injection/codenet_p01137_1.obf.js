var a0_0xde94c1 = a0_0x1948;
function a0_0x1378() {
    var _0x47866f = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'pow',
        'min',
        'log'
    ];
    a0_0x1378 = function () {
        return _0x47866f;
    };
    return a0_0x1378();
}
var input = require('fs')[a0_0xde94c1(0x0)](a0_0xde94c1(0x1), a0_0xde94c1(0x2));
function a0_0x1948(jTefef, key) {
    var stringArray = a0_0x1378();
    a0_0x1948 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1948(jTefef, key);
}
var Arr = input[a0_0xde94c1(0x3)]()[a0_0xde94c1(0x4)]('\x0a');
while (!![]) {
    var e = Arr[a0_0xde94c1(0x5)]() - 0x0;
    if (e == 0x0)
        break;
    var min = Infinity;
    for (var z = 0x0; z <= 0x64; z++) {
        for (var y = 0x0; y <= 0x3e8; y++) {
            var x = e - (Math[a0_0xde94c1(0x6)](z, 0x3) + Math['pow'](y, 0x2));
            if (x < 0x0)
                break;
            min = Math[a0_0xde94c1(0x7)](min, z + y + x);
        }
    }
    console[a0_0xde94c1(0x8)](min);
}