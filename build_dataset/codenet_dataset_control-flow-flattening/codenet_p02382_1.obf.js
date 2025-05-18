var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr[0x0] - 0x0;
var x = Arr[0x1]['split']('\x20')['map'](Number);
var y = Arr[0x2]['split']('\x20')['map'](Number);
var sum1 = 0x0;
var sum2 = 0x0;
var sum3 = 0x0;
var max = 0x0;
for (var i = 0x0; i < n; i++) {
    var DuXPYy = '2|3|4|1|0'['split']('|');
    var XbPQAZ = 0x0;
    while (!![]) {
        switch (DuXPYy[XbPQAZ++]) {
        case '0':
            max = Math['max'](max, a);
            continue;
        case '1':
            sum3 += Math['pow'](a, 0x3);
            continue;
        case '2':
            var a = Math['abs'](x[i] - y[i]);
            continue;
        case '3':
            sum1 += a;
            continue;
        case '4':
            sum2 += Math['pow'](a, 0x2);
            continue;
        }
        break;
    }
}
console['log'](sum1['toFixed'](0x6));
console['log'](Math['sqrt'](sum2)['toFixed'](0x6));
console['log'](Math['pow'](sum3, 0x1 / 0x3)['toFixed'](0x6));
console['log'](max['toFixed'](0x6));