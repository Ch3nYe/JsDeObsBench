var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var [e, y] = input['trim']()['split']('\x20')['map'](Number);
var mtsh = 'MTSH'['split']('');
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
    console['log'](mtsh[e - 0x1] + (y + 0x1));
} else if (e == 0x1)
    console['log'](0x74c + y - 0x1);
else if (e == 0x2)
    console['log'](0x778 + y - 0x1);
else if (e == 0x3)
    console['log'](0x786 + y - 0x1);
else if (e == 0x4)
    console['log'](0x7c5 + y - 0x1);