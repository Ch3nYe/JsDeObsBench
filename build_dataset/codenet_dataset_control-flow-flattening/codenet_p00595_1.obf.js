var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['forEach'](function (v) {
    var obvxns = {
        'sJhtI': '0|3|4|1|2',
        'dXNIs': function (x, y) {
            return x != y;
        },
        'LMKJL': function (x, y) {
            return x % y;
        }
    };
    var ZTydPw = obvxns['sJhtI']['split']('|');
    var gKRTxr = 0x0;
    while (!![]) {
        switch (ZTydPw[gKRTxr++]) {
        case '0':
            var arr = v['split']('\x20')['map'](Number);
            continue;
        case '1':
            while (obvxns['dXNIs'](n, 0x0)) {
                var N = n;
                n = obvxns['LMKJL'](m, n);
                m = N;
            }
            continue;
        case '2':
            console['log'](m);
            continue;
        case '3':
            var m = Math['max'](arr[0x0], arr[0x1]);
            continue;
        case '4':
            var n = Math['min'](arr[0x0], arr[0x1]);
            continue;
        }
        break;
    }
});