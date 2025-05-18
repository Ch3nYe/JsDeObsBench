var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var t = Arr['shift']() - 0x0;
for (var i = 0x0; i < t; i++) {
    var oavMCu = '4|0|3|5|2|6|1'['split']('|');
    var BJqPbn = 0x0;
    while (!![]) {
        switch (oavMCu[BJqPbn++]) {
        case '0':
            var arr = Arr['shift']()['split']('\x20')['map'](Number);
            continue;
        case '1':
            console['log'](max + '\x20' + Math['abs'](min));
            continue;
        case '2':
            var m = arr[0x0];
            continue;
        case '3':
            var max = 0x0;
            continue;
        case '4':
            var n = Arr['shift']() - 0x0;
            continue;
        case '5':
            var min = 0x0;
            continue;
        case '6':
            for (var j = 0x1; j < n; j++) {
                max = Math['max'](arr[j] - m, max);
                min = Math['min'](arr[j] - m, min);
                m = arr[j];
            }
            continue;
        }
        break;
    }
}