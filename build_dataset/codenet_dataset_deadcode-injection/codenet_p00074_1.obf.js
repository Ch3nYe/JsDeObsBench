var a0_0x29f3af = a0_0x3a04;
function a0_0x1d57() {
    var _0x14da23 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'map',
        'floor',
        'log',
        'slice'
    ];
    a0_0x1d57 = function () {
        return _0x14da23;
    };
    return a0_0x1d57();
}
var input = require('fs')[a0_0x29f3af(0x0)](a0_0x29f3af(0x1), a0_0x29f3af(0x2))[a0_0x29f3af(0x3)]();
var lines = input['split']('\x0a');
var line;
function a0_0x3a04(iRmIVr, key) {
    var stringArray = a0_0x1d57();
    a0_0x3a04 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3a04(iRmIVr, key);
}
while (line = lines[a0_0x29f3af(0x4)]()) {
    var time = line['split']('\x20')[a0_0x29f3af(0x5)](function (n) {
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
    rem = Math[a0_0x29f3af(0x6)](rem / 0x3c);
    rem3 = Math[a0_0x29f3af(0x6)](rem3 / 0x3c);
    var remMin = rem % 0x3c;
    var remMin3 = rem3 % 0x3c;
    var remHour = Math[a0_0x29f3af(0x6)](rem / 0x3c);
    var remHour3 = Math[a0_0x29f3af(0x6)](rem3 / 0x3c);
    console[a0_0x29f3af(0x7)](('0' + remHour)[a0_0x29f3af(0x8)](-0x2) + ':' + ('0' + remMin)[a0_0x29f3af(0x8)](-0x2) + ':' + ('0' + remSec)[a0_0x29f3af(0x8)](-0x2));
    console[a0_0x29f3af(0x7)](('0' + remHour3)[a0_0x29f3af(0x8)](-0x2) + ':' + ('0' + remMin3)[a0_0x29f3af(0x8)](-0x2) + ':' + ('0' + remSec3)[a0_0x29f3af(0x8)](-0x2));
}