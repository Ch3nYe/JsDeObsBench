var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
var n = arr['shift']();
var a = arr['shift']();
var cnt = 0x1;
var max = 0x1;
var memo = 0x0;
arr['forEach'](v => {
    var QmCjJm = {
        'TiqLc': function (x, y) {
            return x > y;
        },
        'PMPzD': function (x, y) {
            return x == y;
        }
    };
    if (QmCjJm['TiqLc'](a, v)) {
        if (QmCjJm['PMPzD'](memo, 0x1))
            cnt = 0x2;
        else
            cnt++;
        memo = -0x1;
    } else if (a < v) {
        if (QmCjJm['PMPzD'](memo, -0x1))
            cnt = 0x2;
        else
            cnt++;
        memo = 0x1;
    }
    max = Math['max'](max, cnt);
    a = v;
});
console['log'](max);