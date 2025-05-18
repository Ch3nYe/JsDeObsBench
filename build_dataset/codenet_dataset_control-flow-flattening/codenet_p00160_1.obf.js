var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var sum = 0x0;
    for (var i = 0x0; i < n; i++) {
        var EgwovC = '19|14|5|6|18|9|8|15|0|17|13|10|12|16|1|7|11|3|2|4'['split']('|');
        var kIOKOq = 0x0;
        while (!![]) {
            switch (EgwovC[kIOKOq++]) {
            case '0':
                if (L <= 0x64)
                    x = 0x3e8;
                continue;
            case '1':
                if (W <= 0x14)
                    y = 0x578;
                continue;
            case '2':
                if (W <= 0x2)
                    y = 0x258;
                continue;
            case '3':
                if (W <= 0x5)
                    y = 0x320;
                continue;
            case '4':
                if (x != 0x0 && y != 0x0)
                    sum += Math['max'](x, y);
                continue;
            case '5':
                var W = arr[0x3];
                continue;
            case '6':
                var x;
                continue;
            case '7':
                if (W <= 0xf)
                    y = 0x4b0;
                continue;
            case '8':
                if (L <= 0x8c)
                    x = 0x578;
                continue;
            case '9':
                if (L <= 0xa0)
                    x = 0x640;
                continue;
            case '10':
                var y;
                continue;
            case '11':
                if (W <= 0xa)
                    y = 0x3e8;
                continue;
            case '12':
                if (W > 0x19)
                    y = 0x0;
                continue;
            case '13':
                if (L <= 0x3c)
                    x = 0x258;
                continue;
            case '14':
                var L = arr[0x0] + arr[0x1] + arr[0x2];
                continue;
            case '15':
                if (L <= 0x78)
                    x = 0x4b0;
                continue;
            case '16':
                if (W <= 0x19)
                    y = 0x640;
                continue;
            case '17':
                if (L <= 0x50)
                    x = 0x320;
                continue;
            case '18':
                if (L > 0xa0)
                    x = 0x0;
                continue;
            case '19':
                var arr = Arr['shift']()['split']('\x20')['map'](Number);
                continue;
            }
            break;
        }
    }
    console['log'](sum);
}