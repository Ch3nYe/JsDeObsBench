var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split']('\x20')['map'](Number);
    var n = arr[0x2];
    var sum = 0x0;
    while (n--) {
        var str = (arr[0x0] / arr[0x1])['toFixed'](n + 0x2)['slice'](-0x2);
        sum += str[0x0] - 0x0;
    }
    console['log'](sum);
}