var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var ab = Arr['shift']()['split']('\x20');
    ;
    if (ab[0x0] == 0x0 && ab[0x1] == 0x0)
        break;
    var m = ab[0x1] - ab[0x0];
    var arr = [
        0x0,
        0x0,
        0x0
    ];
    while (m >= 0x3e8) {
        m -= 0x3e8;
        arr[0x2]++;
    }
    while (m >= 0x1f4) {
        m -= 0x1f4;
        arr[0x1]++;
    }
    while (m >= 0x64) {
        m -= 0x64;
        arr[0x0]++;
    }
    console['log'](arr['join']('\x20'));
}