var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var cnt = 0x0;
Arr['forEach'](function (v) {
    var fYoQJT = {
        'HqHmZ': function (x, y) {
            return x == y;
        }
    };
    var str = v['split']('')['reverse']()['join']('');
    if (fYoQJT['HqHmZ'](str, v))
        cnt++;
});
console['log'](cnt);