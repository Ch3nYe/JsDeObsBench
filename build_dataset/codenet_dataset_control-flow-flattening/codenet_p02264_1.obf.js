var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var t = Arr[0x0]['split']('\x20')[0x1] - 0x0;
Arr['shift']();
var T = 0x0;
while (Arr['length'] != 0x0) {
    var bbidLf = '3|1|2|4|0'['split']('|');
    var wYXhcI = 0x0;
    while (!![]) {
        switch (bbidLf[wYXhcI++]) {
        case '0':
            if (b - t <= 0x0) {
                console['log'](a + '\x20' + (T + b));
                T += b;
            } else {
                Arr['push'](a + '\x20' + (b - t));
                T += t;
            }
            continue;
        case '1':
            Arr['shift']();
            continue;
        case '2':
            var a = arr[0x0];
            continue;
        case '3':
            var arr = Arr[0x0]['split']('\x20');
            continue;
        case '4':
            var b = arr[0x1] - 0x0;
            continue;
        }
        break;
    }
}