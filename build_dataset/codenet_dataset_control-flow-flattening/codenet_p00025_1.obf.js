var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['split']('\x0a');
var imagine;
while (imagine = lines['shift']()) {
    var JvLWAX = '5|1|2|7|0|4|6|3|8'['split']('|');
    var xPAjQB = 0x0;
    while (!![]) {
        switch (JvLWAX[xPAjQB++]) {
        case '0':
            for (var i = 0x0; i < 0x4; i++) {
                if (a[i] == b[i]) {
                    hit++;
                }
            }
            continue;
        case '1':
            var a = imagine['split']('\x20')['map'](function (n) {
                return +n;
            });
            continue;
        case '2':
            var b = guess['split']('\x20')['map'](function (n) {
                return +n;
            });
            continue;
        case '3':
            blow -= hit;
            continue;
        case '4':
            var blow = 0x0;
            continue;
        case '5':
            var guess = lines['shift']();
            continue;
        case '6':
            for (var i = 0x0; i < 0x4; i++) {
                if (a['indexOf'](b[i]) >= 0x0) {
                    blow++;
                }
            }
            continue;
        case '7':
            var hit = 0x0;
            continue;
        case '8':
            console['log'](hit + '\x20' + blow);
            continue;
        }
        break;
    }
}