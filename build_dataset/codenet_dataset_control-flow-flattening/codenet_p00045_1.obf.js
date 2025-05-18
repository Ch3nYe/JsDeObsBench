var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var sum = 0x0;
var cnt = 0x0;
Arr['forEach'](function (v) {
    var AYuHyl = {
        'YSIIA': function (x, y) {
            return x * y;
        }
    };
    var arr = v['split'](',')['map'](Number);
    sum += AYuHyl['YSIIA'](arr[0x0], arr[0x1]);
    cnt += arr[0x1];
});
console['log'](sum);
console['log'](Math['round'](cnt / Arr['length']));