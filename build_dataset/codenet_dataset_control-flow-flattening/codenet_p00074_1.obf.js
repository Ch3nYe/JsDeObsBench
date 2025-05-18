var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var lines = input['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var time = line['split']('\x20')['map'](function (n) {
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
    rem3 = Math['floor'](rem3 / 0x3c);
    var remMin = rem % 0x3c;
    var remMin3 = rem3 % 0x3c;
    var remHour = Math['floor'](rem / 0x3c);
    var remHour3 = Math['floor'](rem3 / 0x3c);
    console['log'](('0' + remHour)['slice'](-0x2) + ':' + ('0' + remMin)['slice'](-0x2) + ':' + ('0' + remSec)['slice'](-0x2));
    console['log'](('0' + remHour3)['slice'](-0x2) + ':' + ('0' + remMin3)['slice'](-0x2) + ':' + ('0' + remSec3)['slice'](-0x2));
}