var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var N = Arr['shift']() - 0x0;
for (var i = 0x0; i < N; i++) {
    var YAfBxf = '7|3|9|2|1|0|6|4|5|8'['split']('|');
    var FoCSpU = 0x0;
    while (!![]) {
        switch (YAfBxf[FoCSpU++]) {
        case '0':
            var A = x * b + y * p;
            continue;
        case '1':
            var p = arr[0x3];
            continue;
        case '2':
            var b = arr[0x2];
            continue;
        case '3':
            var x = arr[0x0];
            continue;
        case '4':
            while (p < 0x2)
                p++;
            continue;
        case '5':
            var B = (x * b + y * p) * 0.8;
            continue;
        case '6':
            while (b < 0x5)
                b++;
            continue;
        case '7':
            var arr = Arr['shift']()['split']('\x20')['map'](Number);
            continue;
        case '8':
            console['log'](Math['min'](A, B));
            continue;
        case '9':
            var y = arr[0x1];
            continue;
        }
        break;
    }
}