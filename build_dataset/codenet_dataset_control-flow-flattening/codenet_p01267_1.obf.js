var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    if (arr['join']('') == '00000')
        break;
    var y = Arr['shift']()['split']('\x20')['map'](Number);
    (function (N, A, B, C, X) {
        var QBzrUg = {
            'JKHeY': function (x, y) {
                return x == y;
            },
            'mEfTD': function (x, y) {
                return x * y;
            },
            'oTxXU': function (x, y) {
                return x == y;
            }
        };
        var i = 0x0;
        while (!![]) {
            if (QBzrUg['JKHeY'](y[0x0], X))
                y['shift']();
            if (y['length'] == 0x0) {
                console['log'](i);
                break;
            }
            X = (QBzrUg['mEfTD'](A, X) + B) % C;
            i++;
            if (QBzrUg['oTxXU'](i, 0x2711)) {
                console['log'](-0x1);
                break;
            }
        }
    }['apply'](null, arr));
}