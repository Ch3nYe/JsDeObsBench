var a0_0x532555 = a0_0x5dbd;
(function (stringArrayFunction, comparisonValue) {
    var _0x3160fb = a0_0x5dbd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3160fb(0xdc)) / 0x1 + parseInt(_0x3160fb(0xd5)) / 0x2 + -parseInt(_0x3160fb(0xd2)) / 0x3 * (-parseInt(_0x3160fb(0xdb)) / 0x4) + parseInt(_0x3160fb(0xd4)) / 0x5 + parseInt(_0x3160fb(0xd3)) / 0x6 + parseInt(_0x3160fb(0xd8)) / 0x7 + -parseInt(_0x3160fb(0xde)) / 0x8 * (parseInt(_0x3160fb(0xda)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x14ee, 0x7468d));
var input = require('fs')[a0_0x532555(0xd9)](a0_0x532555(0xcf), 'utf8')['trim']();
function a0_0x14ee() {
    var _0xe8ebf9 = [
        'readFileSync',
        '155862kYamfy',
        '172esrtzf',
        '908884ZcMjiv',
        'log',
        '1232aEasVb',
        'map',
        '/dev/stdin',
        'floor',
        'split',
        '25812vnUNrM',
        '5490102ZZClIC',
        '3758210BNnfUy',
        '311370hZOBNk',
        'slice',
        'shift',
        '298095dakNGN'
    ];
    a0_0x14ee = function () {
        return _0xe8ebf9;
    };
    return a0_0x14ee();
}
var lines = input[a0_0x532555(0xd1)]('\x0a');
function a0_0x5dbd(fSzJiC, key) {
    var stringArray = a0_0x14ee();
    a0_0x5dbd = function (index, key) {
        index = index - 0xce;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5dbd(fSzJiC, key);
}
var line;
while (line = lines[a0_0x532555(0xd7)]()) {
    var time = line[a0_0x532555(0xd1)]('\x20')[a0_0x532555(0xce)](function (n) {
        return +n;
    });
    if (time[0x0] == -0x1 && time[0x1] == -0x1 && time[0x2] == -0x1)
        break;
    var hour = time[0x0];
    var min = time[0x1] + hour * 0x3c;
    var sec = time[0x2] + min * 0x3c;
    var rem = 0x78 * 0x3c - sec;
    var rem3 = rem * 0x3;
    var remSec = rem % 0x3c;
    var remSec3 = rem3 % 0x3c;
    rem = Math['floor'](rem / 0x3c);
    rem3 = Math[a0_0x532555(0xd0)](rem3 / 0x3c);
    var remMin = rem % 0x3c;
    var remMin3 = rem3 % 0x3c;
    var remHour = Math[a0_0x532555(0xd0)](rem / 0x3c);
    var remHour3 = Math[a0_0x532555(0xd0)](rem3 / 0x3c);
    console[a0_0x532555(0xdd)](('0' + remHour)[a0_0x532555(0xd6)](-0x2) + ':' + ('0' + remMin)[a0_0x532555(0xd6)](-0x2) + ':' + ('0' + remSec)[a0_0x532555(0xd6)](-0x2));
    console[a0_0x532555(0xdd)](('0' + remHour3)[a0_0x532555(0xd6)](-0x2) + ':' + ('0' + remMin3)['slice'](-0x2) + ':' + ('0' + remSec3)[a0_0x532555(0xd6)](-0x2));
}