var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var RJZMCF = '1|2|4|0|3'['split']('|');
    var CLAyrp = 0x0;
    while (!![]) {
        switch (RJZMCF[CLAyrp++]) {
        case '0':
            while (n--) {
                var str = (arr[0x0] / arr[0x1])['toFixed'](n + 0x2)['slice'](-0x2);
                sum += str[0x0] - 0x0;
            }
            continue;
        case '1':
            var arr = Arr[i]['split']('\x20')['map'](Number);
            continue;
        case '2':
            var n = arr[0x2];
            continue;
        case '3':
            console['log'](sum);
            continue;
        case '4':
            var sum = 0x0;
            continue;
        }
        break;
    }
}