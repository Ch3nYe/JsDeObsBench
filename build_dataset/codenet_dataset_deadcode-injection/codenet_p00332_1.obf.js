function a0_0x4e4e() {
    var _0x2c6ad4 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'map',
        'MTSH',
        'log'
    ];
    a0_0x4e4e = function () {
        return _0x2c6ad4;
    };
    return a0_0x4e4e();
}
var a0_0x16b53e = a0_0x12a9;
var input = require('fs')[a0_0x16b53e(0x0)](a0_0x16b53e(0x1), 'utf8');
function a0_0x12a9(URrAyC, key) {
    var stringArray = a0_0x4e4e();
    a0_0x12a9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x12a9(URrAyC, key);
}
var [e, y] = input[a0_0x16b53e(0x2)]()[a0_0x16b53e(0x3)]('\x20')[a0_0x16b53e(0x4)](Number);
var mtsh = a0_0x16b53e(0x5)[a0_0x16b53e(0x3)]('');
if (e == 0x0) {
    if (y >= 0x74c && y <= 0x777) {
        e = 0x1;
        y -= 0x74c;
    } else if (y >= 0x778 && y <= 0x785) {
        e = 0x2;
        y -= 0x778;
    } else if (y >= 0x786 && y <= 0x7c4) {
        e = 0x3;
        y -= 0x786;
    } else if (y >= 0x7c5 && y <= 0x7e0) {
        e = 0x4;
        y -= 0x7c5;
    }
    console[a0_0x16b53e(0x6)](mtsh[e - 0x1] + (y + 0x1));
} else if (e == 0x1)
    console[a0_0x16b53e(0x6)](0x74c + y - 0x1);
else if (e == 0x2)
    console[a0_0x16b53e(0x6)](0x778 + y - 0x1);
else if (e == 0x3)
    console[a0_0x16b53e(0x6)](0x786 + y - 0x1);
else if (e == 0x4)
    console[a0_0x16b53e(0x6)](0x7c5 + y - 0x1);